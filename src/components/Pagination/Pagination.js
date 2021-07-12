import { useState, useEffect } from "react";
import Table from "../Table";
import './styles.css'

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
	const [pages] = useState(Math.round(data.length / dataLimit));
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		console.log("paginated data");
		console.log(getPaginatedData());
	}, []);

	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}

	function goToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}

	function changePage(event) {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	function getPaginatedData() {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return data.slice(startIndex, endIndex);
	}

	function getPaginationGroup() {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
	}

	return (
		<div>
			<Table banks={getPaginatedData()} />
			<div className='pagination'>
				{/* previous button */}
				<button
					onClick={goToPreviousPage}
					className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
					prev
				</button>

				{/* show page numbers */}
				{getPaginationGroup().map((item, index) => (
					<button
						key={index}
						onClick={changePage}
						className={`paginationItem ${
							currentPage === item ? "active" : null
						}`}>
						<span>{item}</span>
					</button>
				))}

				{/* next button */}
				
				<button
					onClick={goToNextPage}
					className={`next ${getPaginatedData() < 1 ? "disabled" : ""}`}>
					next
				</button>
			</div>
		</div>
	);
}

export default Pagination;
