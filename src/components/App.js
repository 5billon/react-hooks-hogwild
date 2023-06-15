import { useState } from "react";
import React from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";
import hogsData from "../porkers_data";

function App() {
	const [greased, setGreased] = useState(false)
	const toggleFilter = () => setGreased(!greased)
	const [sort, setSort] = useState('')
	const toggleSort = e => setSort(e.target.value)
	const filteredHogs = greased ?
		hogsData.filter(hogObj => hogObj.greased) :
		hogsData
	const byNameOrWeight = (hogObjA, hogObjB) => {
		switch(sort) {
			case 'name':
				if(hogObjA.name < hogObjB.name){
					return -1
				} else {
					return 1
				}
			case 'weight':
				return hogObjA.weight - hogObjB.weight
			default:
				return 0

		}
	}
	const sortedHogs = [...filteredHogs].sort(byNameOrWeight)
	return (
		<div className="App">
			<Nav toggleSort={toggleSort} toggleFilter={toggleFilter}/>
			<PigPen hogsArray={sortedHogs}/>
		</div>
	);
}

export default App;
