import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, Check, Globe, ChevronDown } from "lucide-react"
import loginImage from "../../assets/Login.png"
import logo from "../../assets/logo.png"
import facebook from "../../assets/facebook.png"
import google from "../../assets/google.png"
import { toast } from 'sonner'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");



    const handleSignIn = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        toast.success("Sign in successful!");
        console.log("Sign in with:", { email, password, rememberMe });
    };

    return (

        <div className="flex w-full min-h-screen bg-white">
            {/* Left Side - Login Form */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12">
                <div className="max-w-md w-full mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-12 ">
                                <img src={logo} alt="Logo" className="w-full h-full" />
                            </div>
                            <h1 className="text-xl font-bold text-gray-900">Brand Name</h1>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-lg text-[#393941] font-medium">Log In</span>
                            <div className="relative " >
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="cursor-pointer flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                                >
                                    <Globe />
                                    <span>{selectedLanguage}</span>
                                    <ChevronDown />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <button
                                            className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setSelectedLanguage("EN");
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            EN
                                        </button>
                                        <button
                                            className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setSelectedLanguage("AR");
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            AR
                                        </button>
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>

                    {/* Welcome Text */}
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E34] mb-2">
                            Hi! Welcome back,
                        </h2>
                        <p className="text-lg sm:text-2xl md:text-3xl pt-1 font-light text-[#393941]">
                            We've been missed
                        </p>
                    </div>

                    {/* Form */}


                    <form onSubmit={handleSignIn} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="email@address.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:bg-white transition"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:bg-white transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className="relative w-5 h-5">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-5 h-5 appearance-none border border-gray-300 rounded cursor-pointer checked:bg-lime-400 checked:border-lime-400 transition"
                                    />
                                    {rememberMe && <Check className="absolute inset-0 w-5 h-5 text-teal-900 pointer-events-none" />}
                                </div>
                                <span className="text-sm text-gray-700">Remember Me</span>
                            </label>
                            <span className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 font-medium">
                                Forgot Password?
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-lime-400 hover:bg-lime-500 text-[#212E05]  font-semibold py-2.5 rounded-lg transition duration-200 mt-6"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#2E2E34]">
                            Don't have an account?{" "}
                            <span className="cursor-pointer text-[#A0CA18] hover:text-[#83aa03] font-semibold">
                                Sign Up
                            </span>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-xs text-[#737584]">Or Continue With</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-3">
                        <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-2.5 border-dashed border-2 border-[#A0CA18] rounded-lg hover:bg-lime-50 transition">
                            <img src={google} alt="Google" className="w-5 h-5 object-contain " />
                            <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
                        </button>
                        <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-2.5 border-dashed border-2 border-[#A0CA18] rounded-lg hover:bg-lime-50 transition">
                            <img src={facebook} alt="Google" className="w-5 h-5 object-contain" />
                            <span className="text-sm font-medium text-gray-700">Sign in with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex flex-1  items-center justify-center p-8 rounded-3xl m-6">
                <div className=" w-full h-full flex items-center justify-center">
                    {/* Background Pattern */}
                    <div className="">
                        <img src={loginImage} alt="loginImage" className="rounded-4xl w-3xl h-3xl" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login