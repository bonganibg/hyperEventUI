function Login() {
  return (
    <form action="" className="flex flex-col gap-5">
      <div className="flex flex-col gap-6">
        <input type="text" placeholder="your@email" className="text-6xl text-grey-200" />
        <hr className="w-[15%] text-grey-300 border-[1px]"/>
      </div>
      <div className="flex flex-col gap-6">
        <input type="password" placeholder="your name" className="text-6xl text-grey-200" />
        <hr className="w-[15%] text-grey-300 border-[1px]"/>
      </div>
      <a type="submit" className="text-3xl text-white-400 underline">login</a>
    </form>
  );
}

export default Login;
