import React from "react";
import {
  ArrowLeftRight,
  ArrowUpFromLine,
  Bell,
  ChartSpline,
  HandCoins,
  House,
  LogOut,
  MessageCircle,
  PiggyBank,
  Settings,
  User,
  Wallet,
  Wallet2,
  Wallet2Icon,
} from "lucide-react";
const Dashboard = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-row ">
        <div className="w-20 bg-[#111315] h-screen flex justify-between items-center flex-col">
          <div className="mt-5 flex flex-col gap-10">
            <h1 className="text-blue-600 font-bold text-4xl">E</h1>
            <House color="white" />
            <Wallet2 color="white" />
            <ArrowLeftRight color="white" />
            <ChartSpline color="white" />
          </div>
          <div className="mb-5 flex flex-col gap-10">
            <Settings color="white" />
            <LogOut color="white" />
          </div>
        </div>
        <div className="bg-[#17191A] flex-1 text-white">
          <div className="flex justify-between p-5 items-center">
            <div>
              <p className="text-3xl font-semibold">Dashboard</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Hi👋 , XYZ</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <MessageCircle color="white" />
              <Bell color="white" />
              <div className="border rounded-full">
                <User className="p-2" size={40} color="white" />
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="flex flex-row gap-5">
              <div>
                <div className="flex gap-5">
                  <div className="w-48 h-48 bg-gradient-to-r from-[#3F5BBA] to-[#2441A4] rounded-lg">
                    <div className="p-5">
                      <div className="bg-[#6078C4] inline-block rounded-full">
                        <Wallet2Icon className="p-3" size={60} />
                      </div>
                      <p className="mt-2 ml-2">Balance</p>
                      <p className="mt-2 ml-2 text-3xl font-semibold">
                        ₹ 12456
                      </p>
                    </div>
                  </div>
                  <div className="w-48 h-48 bg-[#26272E] rounded-lg">
                    <div className="p-5">
                      <div className="bg-[#6078C4] inline-block rounded-full">
                        <HandCoins className="p-3" size={60} />
                      </div>
                      <p className="mt-2 ml-2">Income</p>
                      <p className="mt-2 ml-2 text-3xl font-semibold">
                        ₹ 12456
                      </p>
                    </div>
                  </div>
                  <div className="w-48 h-48 bg-[#26272E] rounded-lg">
                    <div className="p-5">
                      <div className="bg-[#6078C4] inline-block rounded-full">
                        <PiggyBank className="p-3" size={60} />
                      </div>
                      <p className="mt-2 ml-2">Savings</p>
                      <p className="mt-2 ml-2 text-3xl font-semibold">
                        ₹ 12456
                      </p>
                    </div>
                  </div>
                  <div className="w-48 h-48 bg-[#26272E] rounded-lg">
                    <div className="p-5">
                      <div className="bg-[#6078C4] inline-block rounded-full">
                        <ArrowUpFromLine className="p-3" size={60} />
                      </div>
                      <p className="mt-2 ml-2">Expenses</p>
                      <p className="mt-2 ml-2 text-3xl font-semibold">
                        ₹ 12456
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-[#26272E] w-full h-48 rounded-xl">
                  <p className="p-5">My Goals</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
