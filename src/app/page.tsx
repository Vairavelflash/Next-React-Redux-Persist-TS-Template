"use client"
import { setState } from "@/store/features/featureSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const btnState = useSelector((state: RootState) => state.feature.btn);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <button onClick={() => dispatch(setState(!btnState))}>
          Login - Button state is {btnState ? "True" : "False"}
        </button>
      </div>
    </main>
  );
}
