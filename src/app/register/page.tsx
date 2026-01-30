import FallingLeaves from "../../components/pages/events/fallingleaves";
import TicketsLivePricingRow1 from "../../components/pages/register/TicketsLivePricingRow1";
import TicketsLivePricingRow2 from "../../components/pages/register/TicketsLivePricingRow2";

export default function Home() {
  return (
    <div
      className="
        relative
        min-h-screen
        bg-cover bg-center bg-no-repeat bg-fixed
        bg-[url('/register/event/mobilebg.svg')]
        lg:bg-[url('/register/event/eventbg.svg')]
        overflow-y-auto
        py-6
      "
    >
      <FallingLeaves />
      <div className="flex flex-col items-center relative z-20">
      <h1
  className="
    text-center
    text-3xl
    sm:text-4xl
    md:text-6xl
    lg:text-6xl

    max-w-[20rem]
    sm:max-w-sm
    md:max-w-2xl
    lg:max-w-4xl

    text-white
    font-akira
    leading-tight
  "
>
  REGISTRATIONS ARE LIVE
</h1>


        <div className="flex flex-col gap-24 py-12">
          <TicketsLivePricingRow1 />
          <TicketsLivePricingRow2 />
        </div>
      </div>
    </div>
  );
}
