import React from 'react'

const HomePage = () => {
  return (
		<div className="app text-white bg-gradient-to-b from-gray-800 to-blue-600 min-h-screen">
			<header className="text-5xl underline pt-2 ">MooseSquad</header>
			<div className="py-2 ">
				<button className="text-xl  border-1 px-2 mt-4 text-black  bg-fuchsia-400 rounded-xl  ">
					<a href="https://opensea.io/collection/moose-squad">Open Sea</a>
				</button>
				<button className="text-xl  border-1 px-2 mt-4 text-black mx-2  bg-fuchsia-400 rounded-xl  ">
					<a href="https://twitter.com/MooseSquad2022">Twitter</a>
				</button>
			</div>
			<section>
				<section className="text-3xl m-4">
					<p>Welcome to the dopest collection of 1111 Squad members</p>
					<p className="text-2xl my-4">
						This Free collection will hold the WL spots for all future drops{' '}
					</p>
					<h2>Max Mint 2 items per wallet</h2>
				</section>

				<section className="">
					<div className="flex justify-center pt-4 px-4 pb-20">
						<iframe
							title="mint"
							src="https://gateway.ipfscdn.io/ipfs/QmfJu3spsSJot6givCK2VjwEgVHymc5RCXHqfG1W5WZyFX/nft-drop.html?contract=0xa18ba65eB2Fddf30158682543500b49E695081D4&chainId=1"
							width="600px"
							height="600px"
							frameborder="0"
						></iframe>
					</div>
				</section>
			</section>
		</div>
	);
}

export default HomePage