/* eslint-disable @typescript-eslint/no-explicit-any */

// We have to connect db in every file when adding apis in nextjs, in node we have to connect only once
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function POST(request: NextRequest) {
  // Extract data from token

  const userId = await getDataFromToken(request);
  const user = await User.findOne({ _id: userId }).select("-password");

  if (!user) {
    return NextResponse.json(
      { error: "User does not exists" },
      { status: 400 }
    );
  }
  
  return NextResponse.json({
    message: "User found",
    data: user,
  });
}
