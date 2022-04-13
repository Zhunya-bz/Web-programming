let tetris = document.createElement('div');
tetris.classList.add('tetris');

for (let i = 0; i < 180; i++)
{
	let cell = document.createElement('div');
	cell.classList.add('cell');
	tetris.appendChild(cell);
}

let main = document.querySelector('.main');
main.appendChild(tetris);

let setAttributeCell = document.querySelectorAll('.cell');

let i = 0;
for (let y = 17; y >= 0; y--)
{
	for (let x = 0; x < 10; x++)
	{
		setAttributeCell[i].setAttribute('posX', x);
		setAttributeCell[i].setAttribute('posY', y);
		i++;
	}
}

let x = 4, y = 14;

let figureArr = [[[0,1],[0,2],[0,3],[[-1,1],[0,0],[1,-1],[2,-2],],[[1,-2],[0,-1],[-1,0],[-2,1],],[[-1,1],
[0,0],[1,-1],[2,-2],],[[1,-2],[0,-1],[-1,0],[-2,1],],],[[1,0],[0,1],[1,1],],[[1,0],[0,1],[0,2],[[0,0],
[-1,1],[1,0],[2,-1],],[[1,-1],[1,-1],[0,0],[-2,0],],[[-1,0],[0,-1],[1,-2],[2,-1],],[[1,-1],[1,-1],[-1,0],
[-1,0],],],[[1,0],[1,1],[1,2],[[-1,1],[-2,2],[-1,0],[0,-1],],[[1,-2],[1,-2],[0,0],[0,0],],[[1,0],[-1,0],
[0,-1],[0,-1],],[[-1,-1],[2,-2],[1,-1],[0,0],]],[[1,0],[-1,1],[0,1],[[0,0],[-1,1],[2,0],[1,1],],[[0,0],
[1,-1],[-2,0],[-1,-1],],[[0,0],[-1,1],[2,0],[1,1],],[[0,0],[1,-1],[-2,0],[-1,-1],],],[[1,0],[1,1],[2,1],
[[1,0],[0,1],[-1,0],[-2,1],],[[-1,0],[0,-1],[1,0],[2,-1],],[[1,0],[0,1],[-1,0],[-2,1],],[[-1,0],[0,-1],
[1,0],[2,-1],],],[[1,0],[1,1],[2,0],[[1,-1],[0,0],[1,-1],[-1,1],],[[0,0],[-1,0],[-1,0],[1,-1],],[[0,0],
[1,0],[-1,0],[-1,1],],[[-1,1],[0,0],[1,1],[1,-1],]],];

let figureBody = [];
let rotate = 1;
let currentFigure = 0;

function createFigure() {
	function getRand() {
		return (Math.round(Math.random() * (figureArr.length - 1)));
	}

	rotate = 1;
	currentFigure = getRand(); // рандомная фигура

	figureBody = [ // задаем позицию согласно нашему массиву
		document.querySelector(`[posX="${x}"][posY="${y}"]`),
		document.querySelector(`[posX="${x + figureArr[currentFigure][0][0]}"][posY="${y + figureArr[currentFigure][0][1]}"]`),
		document.querySelector(`[posX="${x + figureArr[currentFigure][1][0]}"][posY="${y + figureArr[currentFigure][1][1]}"]`),
		document.querySelector(`[posX="${x + figureArr[currentFigure][2][0]}"][posY="${y + figureArr[currentFigure][2][1]}"]`),
	];

	for (let i = 0; i < figureBody.length; i ++)
		figureBody[i].classList.add('figure'); // добавляем класс чтобы увидеть (раскрашивается)
}

createFigure();
let coordinate = [];
let score = 0;
let points = document.querySelector('.point');
points.textContent = `Ваши очки: ${score}`;

function move() {
	let moveFlag = true;

	for (let i = 0; i < 4; i++) // берем коориднаты из атрибута posX and posY
		coordinate[i] = [figureBody[i].getAttribute('posX'), figureBody[i].getAttribute('posY')];

	for (let i = 0; i < coordinate.length; i++)
	{
		if (coordinate[i][1] == 0 || // проверяем если это ПОЛ или следующий элемент-статичный (.flag-статичный элемент)
			document.querySelector(`[posX="${coordinate[i][0]}"][posY="${coordinate[i][1] - 1}"]`).classList.contains('flag'))
		{
				moveFlag = false; // фигура не двигается 
				break;
		}
	}

	if (moveFlag) // если нам можно идти вниз то
	{
		for (let i = 0; i < figureBody.length; i++)
			figureBody[i].classList.remove('figure'); // удаляем предыдущее положение фигуры

		for (let i = 0; i < figureBody.length; i++) // ставим новое положение фигуры 
			figureBody[i] = document.querySelector(`[posX="${coordinate[i][0]}"][posY="${coordinate[i][1] - 1}"]`);
		
		for (let i = 0; i < figureBody.length; i++)// и раскрашиваем ее
			figureBody[i].classList.add('figure'); 
	}
	else // если двигаться нельзя то
	{
		for (let i = 0; i < figureBody.length; i++)
		{
			figureBody[i].classList.remove('figure');
			figureBody[i].classList.add('flag'); // ставим флаг - для статичной фигуры
		}
		for (let i = 0; i < 14; i++) // идем по y
		{
			let count = 0;
			for (let j = 0; j < 10; j++) // идем по х
			{
				if (document.querySelector(`[posX="${j}"][posY="${i}"]`).classList.contains('flag'))
				{
					count++;
					if (count == 10) //если заполнился весь ряд
					{
						score += 10;
						points.textContent = `Ваши очки: ${score}`;
						for (let k = 0; k < 10; k++) // удаляем весь ряд
							document.querySelector(`[posX="${k}"][posY="${i}"]`).classList.remove('flag');

						let staticFigure = document.querySelectorAll('.flag'); // берем все статичные ячейки
						let newArr = [];
						for (let m = 0; m < staticFigure.length; m++) // идем по всем ячейкам
						{
							let newCoord = [staticFigure[m].getAttribute('posX'), staticFigure[m].getAttribute('posY')]; // записываем координаты
							if (newCoord[1] > i) // берем только те ряды (по y), которые находятся выше исчезнутой строки
							{
								staticFigure[m].classList.remove('flag'); // удаляем флаг статичности
								newArr.push(document.querySelector(`[posX="${newCoord[0]}"][posY="${newCoord[1] - 1}"]`)); // добавляем в наш массив все сдвинутые вниз ячейки
							}
						}
						for (let n = 0; n < newArr.length; n++) // добавляем статичность нашим ячейкам
							newArr[n].classList.add('flag');
						i--; // чтобы начинал считать опять с 0 строки (с той которую удалили)	
					}
				}
			}
		}
		for (let i = 0; i < 10; i++) 
		{
			if (document.querySelector(`[posX="${i}"][posY="15"]`).classList.contains('flag'))
			{
				clearInterval(interval);
				alert(`Игра окончена! Ваши очки: ${score}`);
				break;
			}
		}
		createFigure(); // создаем следующую фигуру
	}
}

let interval = setInterval(() => {
	move();
}, 500); // повторяем функцию движения каждые 300 милисекунд?

function checkBorder(newFigure, borderFlag)
{
	for (let i = 0; i < newFigure.length; i++) // проверяем если это граница или статичная фигура
	{
		if (!newFigure[i] || newFigure[i].classList.contains('flag'))
			borderFlag = false;
	}
	if (borderFlag)
	{
		for (let i = 0; i < figureBody.length; i++)
			figureBody[i].classList.remove('figure');

		figureBody = newFigure;

		for (let i = 0; i < figureBody.length; i++)
			figureBody[i].classList.add('figure');
	}
}

function getNewState(param) {
	let borderFlag = true;
	let newFigure = [];

	for (let i = 0; i < 4; i++) // задаем фигуре координаты- смещаем на один влево или вправо
		newFigure[i] = document.querySelector(`[posX="${+coordinate[i][0] + param}"][posY="${coordinate[i][1]}"]`); // сдвиг по оси Х на param
	
	checkBorder(newFigure, borderFlag)
}

function rotateFigure() {
	let borderFlag = true;
	let newFigure = [];

	for (let i = 0; i < 4; i++)
	{
		if (currentFigure == 1) // это квадрат
			return;
		newFigure[i] = document.querySelector(`[posX="${+coordinate[i][0] +
			figureArr[currentFigure][rotate + 2][i][0]}"][posY="${+coordinate[i][1] + figureArr[currentFigure][rotate + 2][i][1]}"]`); // сдвиг по оси Х на param
	} 
	
	checkBorder(newFigure, borderFlag);
	if (rotate < 4)
		rotate++;
	else
		rotate = 1;
}

window.addEventListener('keydown', (event)=>{
	for (let i = 0; i < coordinate.length; i++)
		coordinate[i] = [figureBody[i].getAttribute('posX'), figureBody[i].getAttribute('posY')];

	if (event.keyCode == 37)
		getNewState(-1);
	else if (event.keyCode == 39)
		getNewState(1); 
	else if (event.keyCode == 40)
		move();
	else if (event.keyCode == 38)
		rotateFigure();
});

