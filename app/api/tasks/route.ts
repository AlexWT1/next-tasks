import { auth } from "@clerk/nextjs/server";
import { stat } from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, desription, date, completed, important } = await req.json();

    if (!title || !desription || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.lenght < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters",
        status: 400,
      });
    }
  } catch (error) {
    console.log("ERROR CREATING TASK", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET() {
  try {
  } catch (error) {
    console.log("ERROR GETTING TASKS", error);
    return NextResponse.json({ error: "Error getting tasks", status: 500 });
  }
}

export async function PUT() {
  try {
  } catch (error) {
    console.log("ERROR UPDATING TASK", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function DELETE() {
  try {
  } catch (error) {
    console.log("ERROR DELETING TASKS", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
