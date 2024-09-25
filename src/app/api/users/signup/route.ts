// We have to connect db in every file when adding apis in nextjs, in node we have to connect only once
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  const { username, email, password } = request.body;
}
