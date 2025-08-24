import React from "react";
import viteLogo from "../../assets/vite3.png";
const Logo = () => {
	return  (
		<>
		<img 
		src={viteLogo} 
		alt="ASsu.Dev Logo" 
		className="h-10 w-auto"
		/>
		<h1 className="text-2xl font-bold text-gray-800">ASsu.Dev</h1>
		</>
	)
};

export default Logo;