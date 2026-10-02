import { createHmac, randomBytes, timingSafeEqual } from "crypto";

const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

export function generateTotpSecret(){const bytes=randomBytes(20);let bits="";for(const byte of bytes)bits+=byte.toString(2).padStart(8,"0");let output="";for(let index=0;index<bits.length;index+=5)output+=alphabet[Number.parseInt(bits.slice(index,index+5).padEnd(5,"0"),2)];return output}

export function totpCode(secret:string,timeMs=Date.now(),digits=6){const key=decodeBase32(secret);const counter=Buffer.alloc(8);counter.writeBigUInt64BE(BigInt(Math.floor(timeMs/30_000)));const digest=createHmac("sha1",key).update(counter).digest();const offset=digest[digest.length-1]&15;const value=(digest.readUInt32BE(offset)&0x7fffffff)%10**digits;return String(value).padStart(digits,"0")}

export function verifyTotp(secret:string,code:string,timeMs=Date.now(),window=1){if(!/^\d{6}$/.test(code))return null;const currentStep=Math.floor(timeMs/30_000);for(let delta=-window;delta<=window;delta++){const step=currentStep+delta;const expected=totpCode(secret,step*30_000);if(timingSafeEqual(Buffer.from(expected),Buffer.from(code)))return step}return null}

export function totpUri(secret:string,email:string){const issuer="TapRadar";const label=`${issuer}:${email}`;return `otpauth://totp/${encodeURIComponent(label)}?secret=${encodeURIComponent(secret)}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA1&digits=6&period=30`}

function decodeBase32(value:string){let bits="";for(const character of value.replace(/=|\s+/g,"").toUpperCase()){const index=alphabet.indexOf(character);if(index<0)throw new Error("Invalid base32 secret");bits+=index.toString(2).padStart(5,"0")}return Buffer.from((bits.match(/.{8}/g)??[]).map(byte=>Number.parseInt(byte,2)))}
