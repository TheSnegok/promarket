import getPersonalKey from "../../Components/Templates/KeyGenerator/KeyGenerator";
import sink from "../../public/hits/image 1.png";
import bathroom from "../../public/hits/image 2.png";
import shower from "../../public/hits/image 3.png";
import toilet from "../../public/hits/image 4.png";
import heatedTowelRail from "../../public/hits/image 5.png";
import mixer from "../../public/stock/1 img.png";
import showerCabin from "../../public/stock/image 2.png";
import bathroomAcr from "../../public/stock/image 3.png";
import toilet2 from "../../public/stock/image 4.png";
import sink2 from "../../public/stock/image 5.png";
import article1 from '../../public/article/image 12.png'
import article2 from '../../public/article/image 13.png'
import article3 from '../../public/article/image 14.png'
import article4 from '../../public/article/image 15.png'
import tile from '../../public/hoverMenu/icon1.svg';
import plumbing from '../../public/hoverMenu/icon2.svg';
import bathroomFurniture from '../../public/hoverMenu/icon3.svg';
import Electronics from '../../public/hoverMenu/icon4.svg';
import heating from '../../public/hoverMenu/icon5.svg';
import flooring from '../../public/hoverMenu/icon6.svg';

export const TYPES = {
	all: {
		name: 'all',
		text: "Все"
	},
	sink: {
		name: 'sink',
		text: "Раковина"
	},
	baths: {
		name: 'baths',
		text: "Ванна"
	},
	toilets: {
		name: 'toilets',
		text: "Туалет"
	},
	showerSystems: {
		name: 'showerSystems',
		text: "Душевая система"
	},
	mixers: {
		name: 'mixers',
		text: "Смесители"
	},
	mirrors: {
		name: 'mirrors',
		text: "Зеркало"
	},
	showerCabins: {
		name: 'showerCabins',
		text: "Душевая кабина"
	},
	washingMachines: {
		name: 'washingMachines',
		text: "Стиральная машина"
	},
	towelDryers: {
		name: 'towelDryers',
		text: "Полотенцесушитель"
	},
	bidet: {
		name: 'bidet',
		text: "Биде"
	},
	heaters: {
		name: 'heaters',
		text: "Обогреватель"
	},
	dishwashers: {
		name: 'dishwashers',
		text: "Посудомойка"
	},
}

export const footerSectionList = [['/', 'Плитка'], ['/', 'Сантехника'], ['/', 'Мебель для ванной'], ['/', 'Электроника и бытовая техника'], ['/', 'Отопление'], ['/', 'Напольное покрытие']];

export const footerMenu = [['/', 'Оплата'], ['/', 'Доставка'], ['/', 'Поставщикам'], ['/', 'Статьи'], ['/', 'Контакты']];

// in MenuListItems.list.first, first object in massive is subheader
export const MenuListItems = [
	{
		src: tile,
		description: "Tile",
		text: "Плитка",
		list: {
			first: [
				[
					{
						text: "Виды",
						url: "/"
					}, {
						text: "Для пола",
						url: "/"
					}, {
						text: "Для кухни",
						url: "/"
					}, {
						text: "Для ванной",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Типы",
						url: "/"
					}, {
						text: "Керамогранит",
						url: "/"
					}, {
						text: "Клинкер",
						url: "/"
					}, {
						text: "Майолика",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Затирка",
						url: "/"
					}, {
						text: "Чёрная",
						url: "/"
					}, {
						text: "Серая",
						url: "/"
					}, {
						text: "Мигдальная",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Модели",
						url: "/"
					}, {
						text: "MOZAICO",
						url: "/"
					}, {
						text: "Kerlite",
						url: "/"
					}, {
						text: "Ceramica",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
			],
			second: [
				{ url: "/", text: 'Плитка мозайка' },
				{ url: "/", text: 'Плитка для пола' },
				{ url: "/", text: 'Затиральные смеси' },
				{ url: "/", text: 'Плитка для кухни' },
				{ url: "/", text: 'Фасадная плитка' },
				{ url: "/", text: 'Плитка для ванной' },
				{ url: "/", text: 'Плитка для улицы' }
			],
			third: [
				{ url: "/", text: "Квадратная" },
				{ url: "/", text: "Круглая" },
				{ url: "/", text: "Овальная" },
				{ url: "/", text: "Прямоугольная" },
				{ url: "/", text: "Ромб" },
				{ url: "/", text: "Триугольная" },
				{ url: "/", text: "Фигурная" },
				{ url: "/", text: "Шестиугольная" },
			]
		}
	},
	{
		src: plumbing,
		description: "Plumbing",
		text: "Сантехника",
		list: {
			first: [
				[
					{
						text: "Ванны",
						url: "/"
					}, {
						text: "Ванны 150 см",
						url: "/"
					}, {
						text: "Ванны 160 см",
						url: "/"
					}, {
						text: "Ванны 170 см",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Унитазы",
						url: "/"
					}, {
						text: "2 режима смыва",
						url: "/"
					}, {
						text: "Без ободка",
						url: "/"
					}, {
						text: "Подвесные",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Раковины",
						url: "/"
					}, {
						text: "Шириной 40 см",
						url: "/"
					}, {
						text: "Шириной 50 см",
						url: "/"
					}, {
						text: "Шириной 60 см",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Смесители",
						url: "/"
					}, {
						text: "Кухонные мойки Ulgran",
						url: "/"
					}, {
						text: "Однорычажные для кухни",
						url: "/"
					}, {
						text: "Премиальные бренда Webert",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
			],
			second: [
				{ url: "/", text: 'Душевые кабины, уголки' },
				{ url: "/", text: 'Биде' },
				{ url: "/", text: 'Душевые боксы' },
				{ url: "/", text: 'Душевые ограждения' },
				{ url: "/", text: 'Душевые поддоны' },
				{ url: "/", text: 'Душевые трапы и лотки' },
				{ url: "/", text: 'Инсталляции' },
				{ url: "/", text: 'Сливные трапы, желоба' },
				{ url: "/", text: 'Душевые гарнитуры' },
				{ url: "/", text: 'Душевые системы' },
				{ url: "/", text: 'Душевые панели' },
				{ url: "/", text: 'Верхние души' },
				{ url: "/", text: 'Гигиенические души' },
				{ url: "/", text: 'Аксессуары для ванной' }
			],
			third: [
				{ url: "/", text: "Аксессуары для общественных санузлов" },
				{ url: "/", text: "Комплектующие" },
				{ url: "/", text: "Кухонные мойки" },
				{ url: "/", text: "Гидромассаж" },
				{ url: "/", text: "Трубы и фитинги" },
				{ url: "/", text: "Изделия для инвалидов" },
				{ url: "/", text: "Инструменты сантехнические" },
				{ url: "/", text: "Писсуары" },
				{ url: "/", text: "Фильтры" },
			]
		}
	},
	{
		src: bathroomFurniture,
		description: "Bathroom Furniture",
		text: "Мебель для ванной",
		list: {
			first: [
				[
					{
						text: "Тип монтажу",
						url: "/"
					}, {
						text: "Угловой",
						url: "/"
					}, {
						text: "Нажимной",
						url: "/"
					}, {
						text: "Подвесной",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Ширина",
						url: "/"
					}, {
						text: "1-20 см",
						url: "/"
					}, {
						text: "20-60 см",
						url: "/"
					}, {
						text: "60-110 см",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Глубина",
						url: "/"
					}, {
						text: "1-40 см",
						url: "/"
					}, {
						text: "40-80 см",
						url: "/"
					}, {
						text: "80-120 см",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Высота",
						url: "/"
					}, {
						text: "40-80 см",
						url: "/"
					}, {
						text: "80-120 см",
						url: "/"
					}, {
						text: "120-200 см",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
			],
			second: [
				{ url: "/", text: 'Раковина' },
				{ url: "/", text: 'Рейлинг' },
				{ url: "/", text: 'Розетка' },
				{ url: "/", text: 'Ручки' },
				{ url: "/", text: 'Сенсорный выключатель' },
				{ url: "/", text: 'Столешница' },
				{ url: "/", text: 'Держатель' },
				{ url: "/", text: 'Держатель для полотенец' },
				{ url: "/", text: 'Тумбочка' },
				{ url: "/", text: 'Умывальник' },
				{ url: "/", text: 'Шкафчик' },
				{ url: "/", text: 'Ящик' },
			],
			third: [
				{ url: "/", text: "Испания" },
				{ url: "/", text: "Италия" },
				{ url: "/", text: "Астралия" },
				{ url: "/", text: "Австрия" },
				{ url: "/", text: "Китай" },
				{ url: "/", text: "Нидерланды" },
				{ url: "/", text: "Германия" },
				{ url: "/", text: "Польша" },
				{ url: "/", text: "Турция" },
				{ url: "/", text: "Украина" },
				{ url: "/", text: "Франция" },
				{ url: "/", text: "Чехия" },
				{ url: "/", text: "Швейцария" },
				{ url: "/", text: "Швеция" },
			]
		}
	},
	{
		src: Electronics,
		description: "Electronics",
		text: "Электроника и бытовая техника",
		list: {
			first: [
				[
					{
						text: "Большая бытовая техника",
						url: "/"
					}, {
						text: "Холодильники",
						url: "/"
					}, {
						text: "Стиральные машины",
						url: "/"
					}, {
						text: "Морозильная камера",
						url: "/"
					}, {
						text: "Сушильные автоматы",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Климатичная техника",
						url: "/"
					}, {
						text: "Кондиционеры",
						url: "/"
					}, {
						text: "Вентиляторы",
						url: "/"
					}, {
						text: "Водонагреватели",
						url: "/"
					}, {
						text: "Водонагреватели(бойлеры)",
						url: "/"
					}, {
						text: "Очистители воздуха",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Кухня",
						url: "/"
					}, {
						text: "Мультиварки",
						url: "/"
					}, {
						text: "Микроволновые печи",
						url: "/"
					}, {
						text: "Кофеварки",
						url: "/"
					}, {
						text: "Блендеры",
						url: "/"
					}, {
						text: "Электрочайники",
						url: "/"
					}, {
						text: "Мясорубки",
						url: "/"
					}, {
						text: "Соковыжымалки",
						url: "/"
					}, {
						text: "Хлебопечки",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Уход и уборка",
						url: "/"
					}, {
						text: "Пылесосы",
						url: "/"
					}, {
						text: "Роботы-пылесосы",
						url: "/"
					}, {
						text: "Швейная техника и акксесуары",
						url: "/"
					}, {
						text: "Утюги и гладильная системы",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
			],
			second: [
				{ url: "/", text: 'Средства для стирки' },
				{ url: "/", text: 'Средства для мытья посуды' },
				{ url: "/", text: 'Средства для убирания' },
				{ url: "/", text: 'Средства для уходя за техникой' }
			],
			third: [
				{ url: "/", text: "Машинки для стрижки" },
				{ url: "/", text: "Триммеры" },
				{ url: "/", text: "Приборы для укладки волос" },
				{ url: "/", text: "Эпиляторы" },
				{ url: "/", text: "Фотоэпиляторы" },
				{ url: "/", text: "Электробритвы для мужчин" },
				{ url: "/", text: "Фены" },
				{ url: "/", text: "Тонометры" },
				{ url: "/", text: "Зубные щетки и ирригаторы" },
				{ url: "/", text: "Весы напольные" },
				{ url: "/", text: "Термометры для тела" }
			]
		}
	},
	{
		src: heating,
		description: "Heating",
		text: "Отопление",
		list: {
			first: [
				[
					{
						text: "Производитель",
						url: "/"
					}, {
						text: "Atlantic",
						url: "/"
					}, {
						text: "Bonjour",
						url: "/"
					}, {
						text: "Термия",
						url: "/"
					}, {
						text: "Gorenje",
						url: "/"
					}, {
						text: "Ufo",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Площадь обслуживания",
						url: "/"
					}, {
						text: "10-14 кв.м",
						url: "/"
					}, {
						text: "15-19 кв.м",
						url: "/"
					}, {
						text: "20-24 кв.м",
						url: "/"
					}, {
						text: "25-30 кв.м",
						url: "/"
					}, {
						text: "меньше чем 10 кв.м",
						url: "/"
					}, {
						text: "больше 30 кв.м",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Монтаж",
						url: "/"
					}, {
						text: "Потолочный",
						url: "/"
					}, {
						text: "Вертикальный",
						url: "/"
					}, {
						text: "Горизонтальный",
						url: "/"
					}, {
						text: "Настольный",
						url: "/"
					}, {
						text: "Настенный",
						url: "/"
					}, {
						text: "Напольный",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Тип теплоносителя",
						url: "/"
					}, {
						text: "Газовые",
						url: "/"
					}, {
						text: "Керосиновые",
						url: "/"
					}, {
						text: "Дизельные",
						url: "/"
					}, {
						text: "Электрические",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
			],
			second: [
				{ url: "/", text: 'Влагозащитный' },
				{ url: "/", text: 'Замок от детей' },
				{ url: "/", text: 'Замок от утечки' },
				{ url: "/", text: 'Защита от замерзания' },
				{ url: "/", text: 'Защита от ожогов' },
				{ url: "/", text: 'Защита от перегрева' }
			],
			third: [
				{ url: "/", text: "Конвекторы" },
				{ url: "/", text: "Маслянные радиаторы" },
				{ url: "/", text: "Керамические панели" },
				{ url: "/", text: "Инфракрасные обогреватели" },
				{ url: "/", text: "Тепловентиляторы" },
				{ url: "/", text: "Тепловые пушки" },
				{ url: "/", text: "Уличные обогреватели" },
				{ url: "/", text: "Тепловые завесы" },
				{ url: "/", text: "Микатермические обогреватели" }
			]
		}
	},
	{
		src: flooring,
		description: "Flooring",
		text: "Напольное покрытие",
		list: {
			first: [
				[
					{
						text: "Тип",
						url: "/"
					}, {
						text: "Модульные напольные покрытия",
						url: "/"
					}, {
						text: "Рулонные напольные покрытия",
						url: "/"
					}, {
						text: "Подкладка",
						url: "/"
					}, {
						text: "Паркет и террасные доски",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				],
				[
					{
						text: "Производитель",
						url: "/"
					}, {
						text: "Amorim",
						url: "/"
					}, {
						text: "Betap",
						url: "/"
					}, {
						text: "Flooring",
						url: "/"
					}, {
						text: "Juteks",
						url: "/"
					}, {
						text: "Krono Original",
						url: "/"
					}, {
						text: "Sticker Wall",
						url: "/"
					}, {
						text: "Еще",
						url: "/"
					}
				]
			],
			second: [
				{ url: "/", text: 'Испания' },
				{ url: "/", text: 'Италия' },
				{ url: "/", text: 'Австралия' },
				{ url: "/", text: 'Австрия' },
				{ url: "/", text: 'Бельгия' },
				{ url: "/", text: 'Китай' },
				{ url: "/", text: 'Нидерланды' },
				{ url: "/", text: 'Германия' },
				{ url: "/", text: 'Польша' },
				{ url: "/", text: 'Португалия' },
				{ url: "/", text: 'Сербия' }
			],
			third: [
				{ url: "/", text: "Модульное покрытие" },
				{ url: "/", text: "Ламинатное покрытие" },
				{ url: "/", text: "Садовая дорожка" },
				{ url: "/", text: "Самоклеевое покрытие" },
				{ url: "/", text: "Линолеум" },
				{ url: "/", text: "Ковровое покрытие" },
				{ url: "/", text: "Утеплительное покрытие" },
				{ url: "/", text: "Ковролин" }
			]
		}
	}
];

export const regions = ["Київ", "Харків", "Запоріжжя", "Суми", "Чернігів", "Полтава", "Дніпропетровськ", "Кропівницький", "Херсон", "Миколаїв", "Черкаси", "Одесса", "Вінниця"];

export const articleText = [
	{
		header: "Актуальные и необычные аксессуары для ванной комнаты",
		text: `\tДля ванной комнаты очень важна чистота: здесь не только полы должны сиять, но сам воздух быть пропитанным свежестью. Не позволяйте влаге скапливаться в помещении, проветривайте ванную комнату как можно чаще. Также, вовремя меняйте полотенца, протирайте поверхности зеркал и стекол, следите за тем, чтобы для каждой принадлежности была отведена отдельная емкость, контейнер или полка.\n\tЗубные щетки, кисти для макияжа и расчески для волос вовсе не должны быть выставлены напоказ. Прежде всего потому, что так ванная выглядит захламленной и неаккуратной, но, кроме того, во влажном воздухе очень быстро распространяются микробы, которые и оседают на всех этих предметах.\n\tВатные диски и шарики, ушные палочки, спонжи для косметики, салфетки и прочее также рекомендуем складывать в специальные емкости. Они, к слову, могут быть стеклянными, керамическими или вытесанными из камня, и иметь привлекательный, а подчас, очень декоративный вид.\n\tКоврик, постеленный на пол ванной комнаты, сразу делает ее похожей на жилую комнату, привнося уют и тепло. Лучше выбирать коврики из смесовых волокон, например, из хлопка и полиэстера, тогда они будут радовать вас своим качеством, мягкостью и отличным внешним видом.\n\tПопробуйте постелить на пол сразу два или три небольших коврика, располагая их один поверх другого, или соединить изделиями торцами. Так, вы сможете комбинировать формы, фактуры или цвета ковриков.`
	},
	{
		header: 'Какой температуры должна быть горячая вода?',
		text: `\tГорячая вода — такая же неотъемлемая часть нашего комфорта, как электричество, газ, отопление. По уровню потребностей ее можно поставить в один ряд с утолением голода и жажды.\n\tЕсли температура горячей воды на момент забора составляла всего 40 градусов, то оплата за ее расход должна быть произведена по тарифу для холодной воды. Для того чтобы перерасчет мог быть произведен, необходимо сделать замеры температуры воды.\n\tДля начала стоит обратиться в диспетчерскую службу управляющей компании или ЖКХ. Обязательна фиксация заявки о температуре воды ниже положенной в письменной форме, с указанием номера заявки, времени ее принятия и фамилии диспетчера. Возможно, спад температурного режима воды произошел вследствие технической неисправности трубопровода или по какой-либо еще известной причине. В этом случае диспетчер обязан уведомить об аварийном режиме и сроках устранения неисправности.\n\tЕсли же температура поданной горячей воды снижена по неизвестным причинам, необходимо согласовать день и час проведения замеров. Далее после проведения замеров составляется акт. Количество экземпляров данного документа должно быть равно количеству участников процедуры. На основании проведенных измерений происходит или не происходит перерасчет оплаты горячей воды по тарификации холодной.\n\tХотелось бы разобраться, почему нормы горячей воды для жилого дома 60 — 75 градусов? При разработке норм температурной подачи горячей воды основными моментами считаются размножение бактерий и вероятность получения ожогов. То есть температурный разбег должен быть таким, чтобы вредоносные бактерии погибали, но вместе с тем, чтобы потребляемая вода не приводила к ожоговым травмам. Последнее очень актуально для детских или лечебных учреждений.\n\tКазалось бы, вывод очевиден: стоит подавать горячую воду с высокой температурой нагрева. Но тут существует обратная сторона. Если температура воды в кране более 50 градусов, есть вероятность получить ожог. Температура воды более 65 °C — ожог кожи за 2 секунды, температура 65 °C — ожог эпидермиса за 5 секунд, температура воды 55 °C — ожог кожи за 90 секунд.\n\tТаким образом, температура в резервных хранилищах для нагревания и подачи горячей воды обязана быть очень высокой. Но ее использование возможно только вместе с одновременной подачей холодной воды.`
	},
	{
		header: 'Конденсат на бачке унитаза: причины появления и способы устранения',
		text: '\tОдним из досадных сюрпризов в туалете и в совмещенном санузле может стать появление конденсата на бачке унитаза. Согласитесь, это не просто мелкая неприятность – это настоящая проблема, которая не только понижает уровень комфорта, но и способна негативно сказаться на здоровье всех членов семьи.\n\tДа и любой ремонт, выполненный самыми качественными материалами, потерпит поражение в борьбе с последствиями, возникшими после длительного воздействия конденсата.\n\tВсем известно, что предупредить проблему гораздо проще, чем потом с ней бороться. А сделать это можно своими силами, не прибегая к услугам специалистов. Для этого необходимо понять, почему появляется конденсат на бачке унитаза, и как устранить первопричину его образования.\n\tКонденсат, появляющийся на бачке, относится к разряду бытовых проблем. Чтобы научиться эффективно с ним бороться, предстоит разобраться с причинами его появления в конкретном помещении.\n\tЛишь после этого можно будет подобрать самый оптимальный вариант для борьбы с ним.\n\tПрежде всего нужно понять природу возникновения «осадков» на сливном бачке. Конденсат – это капли воды, выпадающие из воздуха. Они образуются от резкого перепада температур и выступают на поверхности предметов.\n\tКонденсат на сливном бачке – это вода, образовавшаяся от воздействия холодной воды температурой 7-15°С на внутренние стенки фаянсовой емкости и теплого воздуха температурой 25-32°С, воздействующего снаружи.\n\tКонденсат, обнаруженный на бачке унитаза, никак не радует – хозяева квартиры/дома сразу же пытаются избавиться от него всеми возможными методами. В ход идут полотенца, баночки, блюдца и прочие предметы, которым не место рядом с унитазом. Однако образование «росы» на бачке гораздо проще предотвратить, чем постоянно собирать и убирать.'
	},
	{
		header: 'Анаэробный герметик для резьбовых соединений',
		text: '\tГерметик резьбовой предназначен для изоляции различных трубных и метрических резьбовых соединений. Это сравнительно молодой вид материалов, но, тем не менее, уже успешно вытесняет с рынка традиционные уплотнители: лен, фум-лента и т.д.\n\tЧто такое резьбовой герметик? Какие у него особенности? Где применяется материал? Разберемся ниже.\n\tРезьбовые герметики – это особый класс соединений. Их различают по прочности и степени вязкости. Первоначально их разрабатывали для герметизации и фиксации различных соединений в космической, машиностроительной и авиационной отрасли. Сегодня такие материалы применяются практически повсеместно: от бытового монтажа различных труб и отопительных систем до производства сложных электронных компонентов.\n\tНезатвердевающие составы – это густые и вязкие пасты, которые состоят из синтетических смол и полимеров. Они обеспечивают качественную герметизацию различных соединений и отличаются отличной устойчивостью к вибрациям. Подобные материалы чаще всего применяются совместно с другими видами уплотнителей. Незатвердевающие составы нельзя использовать при высоком давлении в системах, так как их попросту выдавит из резьбы.\n\tТакже многие герметики обладают слабой химостойкостью, поэтому их не следует применять в местах, где есть контакт с агрессивными средами.\n\tК затвердевающим составам относятся герметики. Они не только уплотняют соединения, но и надежно их фиксируют. Время отверждения у каждого материала разное – одни полимеризуются за несколько минут, другие – за несколько часов, третьим нужно около суток или больше. Это зависит от многих факторов, поэтому производитель обычно указывает, сколько герметику нужно времени на отверждение. Следует помнить, что при низких температурах время полимеризации значительно увеличивается.\n\tКлеи-герметики отлично подходят для применения в системах с высоким давлениям. После отверждения они обладают очень высокой устойчивостью к выдавливанию. К недостаткам таких материалов относят усадку в процессе высыхания. Из-за этого соединения приходится дополнительно подтягивать. Из минусов можно также выделить невозможность разборки соединения без разрушения слоя герметика. После демонтажа его нужно будет удалить и нанести заново.'
	},
]

export const articleList = [
	[
		article1, "Актуальные и необычные аксессуары для ванной комнаты", articleText[0].text
	],
	[
		article2, "Какой температуры должна быть горячая вода?", articleText[1].text
	],
	[
		article3, "Конденсат на бачке унитаза: причины появления и способы устранения", articleText[2].text
	],
	[
		article4, "Анаэробный герметик для резьбовых соединений", articleText[3].text
	],
	[
		article1, "Актуальные и необычные аксессуары для ванной комнаты", articleText[0].text
	],
	[
		article2, "Какой температуры должна быть горячая вода?", articleText[1].text
	],
	[
		article3, "Конденсат на бачке унитаза: причины появления и способы устранения", articleText[2].text
	],
	[
		article4, "Анаэробный герметик для резьбовых соединений", articleText[3].text
	],
	[
		article3, "Конденсат на бачке унитаза: причины появления и способы устранения", articleText[2].text
	],
	[
		article4, "Анаэробный герметик для резьбовых соединений", articleText[3].text
	],
];

export const hitsSlideItems = [
	{
		url: '/',
		tags: ["Хит"],
		type: TYPES.sink.name,
		imgSrc: sink,
		stars: [2, 2, 2, 2, 1],
		reviews: 12,
		description: "Раковина Roca Debba 32799400Y, 60x48 см",
		country: "Испания",
		price: [2601],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит", "Акция"],
		type: TYPES.baths.name,
		imgSrc: bathroom,
		stars: [2, 2, 2, 1, 0],
		reviews: 2,
		description: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
		country: "Германия",
		price: [26990, 28601],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит"],
		type: TYPES.showerSystems.name,
		imgSrc: shower,
		stars: [2, 2, 1, 0, 0],
		reviews: 24,
		description: "Душевая система Raiber R0808, хром",
		country: "Германия",
		price: [12207],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит"],
		type: TYPES.toilets.name,
		imgSrc: toilet,
		stars: [2, 2, 1, 0, 0],
		reviews: 4,
		description:
			"Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
		country: "Испания",
		price: [14764],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит"],
		type: TYPES.towelDryers.name,
		imgSrc: heatedTowelRail,
		stars: [2, 2, 2, 1, 0],
		reviews: 10,
		description:
			"Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...",
		country: "Россия, Украина",
		price: [12730],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит"],
		type: TYPES.sink.name,
		imgSrc: sink,
		stars: [2, 2, 1, 0, 0],
		reviews: 12,
		description: "Раковина Roca Debba 32799400Y, 60x48 см",
		country: "Испания",
		price: [2601],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит", "Акция"],
		type: TYPES.baths.name,
		imgSrc: bathroom,
		stars: [2, 2, 2, 1, 0],
		reviews: 2,
		description: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
		country: "Германия",
		price: [26990, 28601],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит"],
		type: TYPES.showerSystems.name,
		imgSrc: shower,
		stars: [2, 2, 1, 0, 0],
		reviews: 24,
		description: "Душевая система Raiber R0808, хром",
		country: "Германия",
		price: [12207],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Хит"],
		type: TYPES.toilets.name,
		imgSrc: toilet,
		stars: [2, 2, 2, 1, 0],
		reviews: 4,
		description:
			"Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
		country: "Испания",
		price: [14764],
		personalKey: getPersonalKey(),
	},
];

export const stockSlideItems = [
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.mixers.name,
		imgSrc: mixer,
		stars: [2, 2, 1, 0, 0],
		reviews: 12,
		description: "Смеситель Hansgrohe Logis 71070000 для раковины",
		country: "Испания",
		price: [6050, 7601],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.showerCabins.name,
		imgSrc: showerCabin,
		stars: [2, 2, 2, 2, 1],
		reviews: 12,
		description: "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
		country: "Германия",
		price: [84000, 90580],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.baths.name,
		imgSrc: bathroomAcr,
		stars: [2, 2, 1, 0, 0],
		reviews: 12,
		description:
			"Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
		country: "Германия",
		price: [29990, 36900],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.toilets.name,
		imgSrc: toilet2,
		stars: [2, 2, 2, 1, 0],
		reviews: 12,
		description: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
		country: "Испания",
		price: [32108, 34900],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.sink.name,
		imgSrc: sink2,
		stars: [2, 2, 2, 1, 0],
		reviews: 10,
		description: "Раковина Laufen Palace 120 см 8.1170.4.000.104.1",
		country: "Швейцария",
		price: [53458, 58601],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.mixers.name,
		imgSrc: mixer,
		stars: [2, 2, 2, 1, 0],
		reviews: 12,
		description: "Смеситель Hansgrohe Logis 71070000 для раковины",
		country: "Испания",
		price: [6050, 7601],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.showerCabins.name,
		imgSrc: showerCabin,
		stars: [2, 2, 2, 1, 0],
		reviews: 12,
		description: "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
		country: "Германия",
		price: [84000, 90580],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.baths.name,
		imgSrc: bathroomAcr,
		stars: [2, 2, 1, 0, 0],
		reviews: 12,
		description:
			"Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
		country: "Германия",
		price: [29990, 36900],
		personalKey: getPersonalKey(),
	},
	{
		url: '/',
		tags: ["Акция"],
		type: TYPES.toilets.name,
		imgSrc: toilet2,
		stars: [2, 2, 1, 0, 0],
		reviews: 12,
		description: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
		country: "Испания",
		price: [32108, 34900],
		personalKey: getPersonalKey(),
	},
];

export const hitsMenu = [
	["Любые товары", TYPES.all.name],
	["Раковины", TYPES.sink.name],
	["Ванны", TYPES.baths.name],
	["Унитазы", TYPES.toilets.name],
	["Душевые системы", TYPES.showerSystems.name],
	["Смесители", TYPES.mixers.name],
	["Зеркала", TYPES.mirrors.name],
	["Душевые кабины", TYPES.showerCabins.name],
	["Стиральные машины", TYPES.washingMachines.name],
];

export const stockMenu = [
	["Любые товары", TYPES.all.name],
	["Смесители", TYPES.mixers.name],
	["Полотенцесушители", TYPES.towelDryers.name],
	["Биде", TYPES.bidet.name],
	["Душевые системы", TYPES.showerSystems.name],
	["Ванны", TYPES.baths.name],
	["Унитазы", TYPES.toilets.name],
	["Отопители", TYPES.heaters.name],
	["Посудомоечные машины", TYPES.dishwashers.name],
];
