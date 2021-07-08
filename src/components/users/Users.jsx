import React from 'react';

function Users() {
	return (
		<div>
			<section className="p-5">
				<div className="container">
					<h1 className="text-center my-4">Users List</h1>
					<table className="table table-hover  rounded">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">User ID </th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>
									{' '}
									<img
										src="https://randomuser.me/api/portraits/women/12.jpg"
										alt=""
									/>{' '}
									Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">6</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">7</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">8</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">9</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">10</th>
								<td>
									{' '}
									<img src="/images/svg1.svg" alt="" /> Jane Doe
								</td>
								<td>@mdo</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#view"
									>
										view
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			{/* modal */}
			<section className="p-5">
				<div
					class="modal fade"
					id="view"
					tabindex="-1"
					aria-labelledby="enrollLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<img src="/images/svg1.svg" alt="" />
								<h5 class="modal-title" id="enrollLabel">
									Jane Doe
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<h5>User ID: jhandoe@</h5>
								<h5>DOB: 14/06/1997</h5>
								<h5>Email: jhandoe@gamil.com</h5>
								<h5>Phone: +91 0000000000</h5>
								<h5>Address: Jsr| Jhar</h5>
							</div>
							<div class="mb-3">
								<label for="phone" class="col-form-label">
									Amount:
								</label>
								<input type="number" class="form-control" id="phone" />
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-primary"
									data-bs-dismiss="modal"
								>
									Transfer money
								</button>
							</div>
						</div>
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

export default Users;
