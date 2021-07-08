import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
function Home() {
	return (
		<div>
			{/* Home */}
			<section className=" home  p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
				<div className="container">
					<div className="d-sm-flex align-items-center justify-content-between">
						<div>
							<h1>
								<span className="text-warning">Basic Bank</span>
							</h1>
							<p className="lead my-4">
								A bank is a financial institution that accepts deposits from the
								public and creates a demand deposit while simultaneously making
								loans
							</p>
							<Link to="/users">
								{' '}
								<a href="/users" class="btn btn-dark mt-3">
									User List<i class="bi bi-chevron-right"></i>
								</a>
							</Link>
						</div>
						<img
							className="img-fluid w-50 d-none d-sm-block"
							src="/images/svg2.svg"
							alt=""
						/>
					</div>
				</div>
			</section>
			<hr className="m-5" />
			{/* about */}
			<section id="learn" class="p-5 fundamentals">
				<div class="container">
					<h2 class="text-center">About Us</h2>
					<div class="row align-items-center justity-content-between">
						<div class="col-md">
							<img src="images/svg3.svg" class="img-fluid rounded" alt="" />
						</div>
						<div class="col-md p-5">
							<p class="lead">
								Banking is an industry that handles cash, credit, and other
								financial transactions for individual consumers and businesses
								alike. Banking provides the liquidity needed for families and
								businesses to invest in the future, and is one of the key
								drivers of the U.S. economy.
							</p>
							<a href="/users" class="btn btn-dark mt-3">
								Read more<i class="bi bi-chevron-right"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
			<hr className="m-5" />
			{/* Contact */}
			<section>
				<div className="container p-5 ">
					<h1 className="text-center">Contact Us</h1>
					<div class="col-md ">
						<form>
							<div class="form-group mb-4">
								<label for="exampleFormControlInput1">Email address</label>
								<input
									type="email"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="name@example.com"
								/>
							</div>
							<div class="form-group mb-4">
								<label for="exampleFormControlSelect1">Name</label>
								<input
									type="email"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="John Doe"
								/>
							</div>
							<div class="form-group mb-4">
								<label for="exampleFormControlSelect1">Subject</label>
								<input
									type="email"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="Subject"
								/>
							</div>
							<div class="form-group">
								<label for="exampleFormControlTextarea1">Message</label>
								<textarea
									class="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Message"
								></textarea>
							</div>
							<button class="btn btn-outline-dark btn-lg my-3" type="button">
								Send
							</button>
						</form>
					</div>
				</div>
			</section>
			<footer class="p-5 bg-dark text-white text-center position-relative">
				<div class="container">
					<p class="lead">Copyright &copy; 2021 Basic Bank</p>
				</div>
			</footer>
		</div>
	);
}

export default Home;
