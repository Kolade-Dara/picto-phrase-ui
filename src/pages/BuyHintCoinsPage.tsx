import Header from "@/components/utility/Header";
import BuyHintItem from "../components/utility/BuyHintItem";
import AdBanner from "../components/utility/AdBanner";

function BuyHintList() {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen p-4 justify-start gap-6 bg-gradient-to-b from-[#F6D365] to-[#FDA085]">
      <Header
        title="Buy Hint Coins"
        showBackButton
        onBack={() => console.log("Go back")}
      />

      <div className="gap-8 flex flex-col w-full">
        <BuyHintItem
          priceNaira={50}
          coins={200}
          onClick={() => console.log("Buy 50N => 200 coins")}
        />
        <BuyHintItem
          priceNaira={100}
          coins={200}
          onClick={() => console.log("Buy 100N => 200 coins")}
        />
        <BuyHintItem
          priceNaira={200}
          coins={200}
          onClick={() => console.log("Buy 200N => 200 coins")}
        />
        <BuyHintItem
          priceNaira={500}
          coins={200}
          onClick={() => console.log("Buy 500N => 200 coins")}
        />
        <BuyHintItem
          priceNaira={1000}
          coins={200}
          onClick={() => console.log("Buy 1000N => 200 coins")}
        />
      </div>

      <div className="mb-8 w-full max-w-md">
        <AdBanner
          imageUrl="/images/cocacola-banner.jpg"
          buttonText="Learn More"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
}

export default BuyHintList;
