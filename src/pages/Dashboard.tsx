import React from "react";
import Switch from "../components/Switch";
import TransactionListing from "../components/TransactionListing/TransactionListing";

const Dashboard = () => {
  return (
    <div className="page-grid global-container">
      <div className="">
        <h1 className="text-wyPurple2 font-bold text-4xl font-Ciruclar">
          My Transactions
        </h1>

        <h2 className="mt-3 font-Ciruclar">
          Welcome Jerry, see your transaction logs{" "}
        </h2>

        <div
          className="p-5 bg-wyPurple2 rounded-md w-full mt-8 flex items-center gap-10"
          style={{
            boxShadow: "0px 15px 25px 0px #0B69FF24"
          }}
        >
          <img src={require("../assets/img/house.svg").default} alt="" />

          <div className="flex flex-col justify-between font-Ciruclar">
            <h2 className="text-white font-bold text-lg ">$ to ₦</h2>

            <h3 className="text-white text-opacity-30 text-sm mt-1">
              80% <span className="inline-block ml-3">2hrs Left</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-white w-full px-8 py-10 flex gap-10 items-start">
        <div>
          <img
            src={require("../assets/img/pie.svg").default}
            alt=""
            className="mt-10"
          />
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-lg font-Ciruclar">Buy Property</h1>

            <button className="text-wyLPurple font-Ciruclar px-3 py-1 border-2 border-wyLPurple rounded-md">
              Stop Transaction
            </button>
          </div>

          <div className="w-10/12">
            <hr className="my-6" />

            <div className="grid grid-cols-3">
              <div className="font-Ciruclar">
                <h1 className="text-wyLPurple mb-1 text-lg">₦921,000.00</h1>
                <h1 className="tracking-wider text-xs text-opacity-50 text-black uppercase">
                  Received
                </h1>
              </div>

              <div className="font-Ciruclar">
                <h1 className="text-opacity-50 text-black mb-1 text-lg">
                  $1,210.00
                </h1>
                <h1 className="tracking-wider text-xs text-opacity-50 text-black uppercase">
                  sent
                </h1>
              </div>

              <div className="font-Ciruclar">
                <h1 className="text-opacity-50 text-black mb-1 text-lg">
                  10hrs
                </h1>
                <h1 className="tracking-wider text-xs text-opacity-50 text-black">
                  TIME LEFT
                </h1>
              </div>
            </div>

            <div className="bg-wyLPurple rounded-md w-full p-10 flex gap-10 my-8 items-center bg-opacity-30">
              <img src={require("../assets/img/bulb.svg").default} alt="" />

              <p className="font-Ciruclar tex-sm">
                Based on your selected convertion rate, you’re likely to archive
                your goal on time. keep going
              </p>
            </div>

            <div className="flex items-center justify-between font-Ciruclar mb-10">
              <div>
                <h1 className="text-opacity-50 text-black ">In Bound</h1>

                <h1 className="text-wyLPurple mt-1">Dollar</h1>
              </div>

              <div className="w-40">
                <h1 className="text-opacity-50 text-black ">Maturity Date</h1>

                <h1 className="text-wyLPurple mt-1">10, June, 2020</h1>
              </div>
            </div>

            <div className="flex items-center justify-between font-Ciruclar mb-10">
              <div>
                <h1 className="text-opacity-50 text-black ">Out Bound</h1>

                <h1 className="text-wyLPurple mt-1">Naira</h1>
              </div>

              <div className="w-40">
                <h1 className="text-opacity-50 text-black ">Estimate</h1>

                <h1 className="text-wyLPurple mt-1">10hrs</h1>
              </div>
            </div>

            <div className=" flex items-center justify-between mb-10 font-bold font-Ciruclar">
              <h1>Allow Auto Debiting?</h1>

              <Switch />
            </div>

            <div className="font-Ciruclar">
              <h1 className="font-bold mb-8">Recent Transactions</h1>

              <TransactionListing amount={3200} type="received" />
              <TransactionListing amount={3200} type="sent" />
              <TransactionListing amount={3200} type="received" />
              <TransactionListing amount={3200} type="received" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
