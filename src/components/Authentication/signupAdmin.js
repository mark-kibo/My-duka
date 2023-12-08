
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function SignUpAdmin() {
	
	

	return (
		<main className="flex bg-[#ededed] min-h-screen flex-col sm:w-2/2 justify-center items-center h-screen">
			
				<div
					className="flex bg-white w-[90%] md:w-[40%] lg:w-[30%]  h-auto justify-center items-center p-1 m-5 shadow-2xl rounded-2xl"
					style={{
						overflow: "hidden"
					}}>
					<div className="w-[100%] p-5 h-full  m-auto ">
						<div className="flex  justify-center items-center iconn__wrapper p-0">
							<Image
								width={280}
								height={60}
								alt="logo"
								src=""
							/>
						</div>
						<div className="py-2">
							
						</div>
						<form
							method="POST"
							onSubmit={(e) => handleSubmit(e)}>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">
									User Name
								</label>
								<input
								
									
									type="text"
									name="userName"
									id="name"
									required
									className={`bg-white text-asky-900 border border-sky-900 text-sm rounded w-full p-2.5`}
									placeholder="John Doe"
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-sky-900">
									Password
								</label>
								<input
									onPaste={(e) => e.preventDefault()}
									autoComplete="Password"
									
									type="password"
									name="password"
									id="password"
									required
									className={`bg-white text-sky-900 border border-sky-900 text-sm rounded w-full p-2.5`}
									placeholder="Password"
								/>
							</div>
							
							<button
								className="bg-[#1F5780] rounded-md p-3 sm:col-span-2 w-full text-white"
								type="submit">
								Login
							</button>
						</form>
						<div className="flex justify-between">
							<h5 className="text-sm p-2">
								<Link
									to="/forgotpassword"
									className="text-gray-500 hover:text-sky-950 rounded-lg p-1">
									Forgot password
								</Link>
							</h5>
							<h5 className="text-sm p-2">
								<Link
									to="/signup"
									className="text-sky-900 hover:text-sky-950 rounded-lg p-1">
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

export default SignUpAdmin;
