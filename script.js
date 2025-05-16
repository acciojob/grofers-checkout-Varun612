const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let sum=0;
	const priceElements = document.querySelectorAll('.price');

	priceElements.forEach(el=> {
		sum+=Number(el.textContent);
	});
	
	const totalRow = document.createElement('tr');
	const totalCell = document.createElement('td');
	totalCell.id="ans";
	totalCell.colSpan=2;
	totalCell.textContent= `Total Price: Rs ${sum}`;
	
	totalRow.appendChild(totalCell);
	const table = document.querySelector('table');
	table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

