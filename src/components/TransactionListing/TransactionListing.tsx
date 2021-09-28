interface TransactionProps {
  amount: number;
  type: "received" | "sent";
  //   date: string;
}

const TransactionListing = ({ amount, type }: TransactionProps) => {
  return (
    <div className="transaction-listing-grid my-4">
      <div className="flex items-center gap-5">
        {type === "sent" ? (
          <>
            {" "}
            <img src={require("../../assets/img/sent.svg").default} alt="" />
            <p
              className="font-Ciruclar font-bold "
              style={{ color: "#B82117" }}
            >
              ₦{amount.toLocaleString("en-NG")}
            </p>
          </>
        ) : (
          <>
            <img
              src={require("../../assets/img/received.svg").default}
              alt=""
            />

            <p
              className="font-Ciruclar font-bold "
              style={{ color: "#17B899" }}
            >
              ₦{amount.toLocaleString("en-NG")}
            </p>
          </>
        )}
      </div>

      <p className="font-Ciruclar ">{type === "sent" ? "Sent" : "Received"}</p>

      <div className="bg-wyLPurple bg-opacity-5 flex items-center gap-3 p-3 justify-center rounded-md">
        <img src={require("../../assets/img/clock.svg").default} alt="" />
        <span className="text-wyLPurple text-xs">Feb 10th, 12:30pm</span>
      </div>
    </div>
  );
};

export default TransactionListing;
