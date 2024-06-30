import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <section className="grid grid-cols-3 p-24 min-h-[800px]">
        <div className="col-span-1 flex justify-end mt-32">
          <div className="flex flex-col px-10 gap-12">
            <button className="text-7xl text-grey-100">
              {isLogin ? "login" : "join"}
            </button>
            <button onClick={(() => setIsLogin(!isLogin))} className="text-6xl text-grey-300">
              {isLogin ? "join" : "login"}
            </button>
          </div>
        </div>

        <div className="col-span-2 p-32 border-l-[2px] border-l-grey-300 ">
          {/* Set login if isLogin */}
          {isLogin ? <Login /> : <SignUp />}
        </div>
      </section>

      <section className="w-full flex justify-center text-grey-300">
        <ul className="flex gap-4 text-slate-400">
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M16 4a4 4 0 0 0-4 4v2h-1a12.96 12.96 0 0 1-8.803-3.434a9.504 9.504 0 0 0 5.806 10.77l1.731.686l-1.528 1.064a13.5 13.5 0 0 1-2.554 1.396C6.707 20.819 7.832 21 9 21c6.075 0 11-4.925 11-11V8.473l.227-.277c.546-.666.93-1.166 1.279-1.657c-.278.111-.548.2-.784.254l-.774.176l-.348-.714A4 4 0 0 0 16 4m6.976 1.755l1.018.696l-.565.825c-.417.61-.832 1.171-1.429 1.91V10c0 7.18-5.82 13-13 13c-2.45 0-4.743-.678-6.7-1.858L.05 19.787l2.581-.484a11.4 11.4 0 0 0 2.912-.965A11.49 11.49 0 0 1 0 8.5c0-1.496.286-2.927.807-4.24l.624-1.573l1.077 1.306A10.98 10.98 0 0 0 10 7.955a6 6 0 0 1 10.947-3.351c.372-.166.764-.385 1.008-.582l.778-.627l1.255 1.557l-.778.627a4 4 0 0 1-.234.176"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M8 6a6 6 0 0 1 6-6h5v6.5h-4v2h4.247L17.802 15H15v9H8v-9H4.25V8.5H8zm6-4a4 4 0 0 0-4 4v4.5H6.25V13H10v9h3v-9h3.198l.555-2.5H13v-4a2 2 0 0 1 2-2h2V2z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M11.95 1h.1c1.827 0 3.266 0 4.42.105c1.178.106 2.156.328 3.03.833A7 7 0 0 1 22.062 4.5c.505.874.727 1.852.833 3.03C23 8.684 23 10.123 23 11.95v.1c0 1.827 0 3.266-.105 4.42c-.106 1.178-.328 2.156-.833 3.03a7 7 0 0 1-2.562 2.562c-.874.505-1.852.727-3.03.833c-1.154.105-2.593.105-4.42.105h-.1c-1.827 0-3.266 0-4.42-.105c-1.178-.106-2.156-.328-3.03-.833A7 7 0 0 1 1.938 19.5c-.505-.874-.727-1.852-.833-3.03C1 15.316 1 13.877 1 12.05v-.1c0-1.827 0-3.266.105-4.42c.106-1.178.328-2.156.833-3.03A7 7 0 0 1 4.5 1.938c.874-.505 1.852-.727 3.03-.833C8.684 1 10.123 1 11.95 1M7.71 3.096c-1.039.095-1.691.274-2.21.574A5 5 0 0 0 3.67 5.5c-.3.519-.48 1.171-.574 2.21C3.001 8.764 3 10.112 3 12s.001 3.236.096 4.29c.095 1.039.274 1.691.574 2.21a5 5 0 0 0 1.83 1.83c.519.3 1.171.48 2.21.574c1.054.095 2.402.096 4.29.096s3.236-.001 4.29-.096c1.039-.095 1.691-.274 2.21-.574a5 5 0 0 0 1.83-1.83c.3-.519.48-1.171.574-2.21c.095-1.053.096-2.402.096-4.29s-.001-3.236-.096-4.29c-.095-1.039-.274-1.691-.574-2.21a5 5 0 0 0-1.83-1.83c-.519-.3-1.171-.48-2.21-.574C15.237 3.001 13.888 3 12 3s-3.236.001-4.29.096m9.04 3.156c0-.552.45-1.002 1.002-1.002s1.002.45 1.002 1.002s-.45 1.002-1.002 1.002s-1.002-.45-1.002-1.002M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 12a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"
                />
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default AuthPage;
