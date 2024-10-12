import { NextResponse } from "next/server";

/**
 * @param {<T>(ele: T)=> void} next
 * @returns {(ele: T) => Promise<any>}
 */
export default function TryCatch(next) {
  return async (ele) => {
    try {
      return await next(ele);
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  };
}
