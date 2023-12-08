import React, { useEffect, useState } from "react";
import {
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import Messagehandler from "../Reusables/Messagehandler";
import axios from "axios";

const queryClient = new QueryClient();

function Login() {
  const [formData, setFormData] = useState({});
  const [msg, setMsg] = useState({});
  const navigate = useNavigate();


  function handleChange(e) {
    setFormData((prevstate) => {
      return { ...prevstate, [e.target.name]: e.target.value };
    });
  }

  // create mutation to post data
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post("https://myduka-apis.onrender.com/login/", {
        username:formData.username,
        password:formData.password
      });
      console.log(res)
      return res.data;
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    mutation.mutateAsync()
      .then((data) => {
        console.log(data)
        localStorage.setItem("token", data.access_token)
        // setMsg({
        //     type: "success",
        //     message: "redirecting",
        //   });
        navigate("/")
  
      })
      .catch(() => {
        setMsg({
          type: "alert alert-error",
          message: "Invalid username or password",
        });
      });
    
  }

  return (
    <main className="flex bg-[#ededed] min-h-screen flex-col sm:w-2/2 justify-center items-center h-screen">
       <>
        {msg?.message?.length > 0 && (
          <>
            <Messagehandler type={msg?.type} message={msg?.message} />
            {setTimeout(() => {
              setMsg();
            }, 2000)}
          </>
        )}
      </>
      <div
        className="flex bg-white w-[90%] md:w-[40%] lg:w-[30%]  h-auto  justify-center items-center p-1 m-5 shadow-2xl rounded-2xl"
        style={{
          overflow: "hidden",
        }}
      >
       
        <div className="w-[100%] p-5 h-full  m-auto ">
          <div className="flex  justify-center items-center iconn__wrapper p-0">
            <img
              width={100}
              height={60}
              alt="logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABU1BMVEX////4oS78/Pz6+vr39/fy8vL09PTx8fH19fX9//4zcDfv7+8AAAD3oiv9//8kbSiHo4r5pTRKSkpYWFjf398wMDD34cP5zZfDw8P2//8ycTb3oTHOzs7p6en3o0T0nxa0tLT78uX5/vWamprMzMw0bjva2tqlpaV4eHj7ny9qamq5ubmSkpL6oiYSEhL7nzA/Pz/3/u8fZyTtqk/uxIOKiopVVVUzMzMpZC/7nBr78tb9+/PW5tXwz6L0wGrvtVr1368MXxRBekjB08P01JzppjXj7+ZkjmisxavxrlU4aj2arprxuG3027X1w4fsu11wlnL5nAD2smxSfVh0l3z5rVtjg2TM1spMfE727tizyrSkuKuEqIfy/OqWtZcgICDqqSpilGDB2cR0jXXrzKeauKLpxnvx5rjpxozz89vtsUj12L798v7rzo7y8Mzj05/xu4sj8TTqAAAQ8UlEQVR4nO2d/UPayNbHk4DooBlkS4EkYDAINtqUEmjXMKJWAbUFr127q7i229vbF/Vqn/v///ScyQsEAaVWrWC+VZqEJOSTM3PmnMmMMIwnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efLkyZMnT548efI0+kIM/tWXcCPi8KAcCGOEEGGwfQQWMGKG9y6g5WUFXhEaZGcOKQoWUD5aXlk9PS2sfl07AXpy29d4W5p+pa9Pb4wPuLeA8WxlVTIM1ZJcjb0XBrpt91C1YCgo6npwcyt55b4YynppJQzcGm8YhqaprKry27PDyq68DmWCIODfe7NMfVhPwWbCKUKpzqoGW13dKTca0c8727Im8eq/uGGFPwzquihSejGk79b67EXp8Ps6+9b4o1JSBAEhzAmYzBZllTUaQ+rsMDi7N3uiLgYzIH3pU78dUb6svS2U81DjEUF+QuB2ICgJBc2oDy07fUlubep6CMwv6svdxR7uD0bNbePPqEKbA2Vjei8YXN97d6gwgjB7mitwd3/dNySL1bdxFAxB2T9QuvfAmJTlP6OC1RBC245qb4KhkK5vQYhTUsO+O73em5bZvtf+CopB/UvXm1ho7oQbCnZiAExDm+UD8BH6NMZCrDq8drcF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"
            />
          </div>
          <div className="py-2 m-4 text-center">
            <h3 className="leading-4 uppercase font-bold ">MyDuka Login</h3>
          </div>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-4 text-sm font-medium text-gray-900 dark:text-sky-900"
              >
                User Name
              </label>
              <input
                type="text"
                name="username"
                id="name"
                onChange={handleChange}
                required
                className={`bg-white text-asky-900 border border-sky-900 text-sm rounded w-full p-2.5 mb-4`}
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-4 text-sm font-medium text-gray-900 dark:text-sky-900"
              >
                Password
              </label>
              <input
                onPaste={(e) => e.preventDefault()}
                autoComplete="Password"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                required
                className={`bg-white mb-4 text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5`}
                placeholder="Password"
              />
            </div>

            <button
              className="bg-[#1F5780] rounded-md p-3 sm:col-span-2 w-full text-white"
              type="submit"
              disabled={mutation.isLoading}
            >
              {mutation.isPending ? (
                <span className="loading loading-dots loading-lg"></span>
              ) : (
                "login"
              )}
            </button>
          </form>
          <div className="flex justify-between">
            <h5 className="text-sm p-2">
              <Link
                to="/forgotpassword"
                className="text-gray-500 hover:text-sky-950 rounded-lg p-1"
              >
                Forgot password
              </Link>
            </h5>
            <h5 className="text-sm p-2">
              <Link
                to="/signup"
                className="text-sky-900 hover:text-sky-950 rounded-lg p-1"
              >
                Sign up
              </Link>
            </h5>
          </div>
          <div className="flex justify-center items-center h-4">
            <div className="flex items-center: md:flex-row justify-center items-center">
              <h5 className=" mt-2 text-sm text-sky-900  ml-auto">
                MyDuka <span>&copy; 2023</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
