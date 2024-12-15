
import Link from "next/link";

export default function Form() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl text-center mb-5 font-bold mt-10">
        Enter your Details
      </h1>

      <div>
        <form className="flex flex-col justify-center items-center border mt- 5p-4">
          <input
            className="border-2 border-slate-700 mt-3 p-2 w-80"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="border-2 border-slate-700 p-2 w-80 mt-3"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="border-2 border-slate-700 p-2 w-80 mt-3"
            type="text"
            placeholder="Your Address"
          />
          <button className="border-blue-900 border text-blue-900 px-6 mb-10 py-3 rounded-lg mt-8 hover:bg-blue-900 hover:text-white">
            <Link href="/form/thankyou">Place Order</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
