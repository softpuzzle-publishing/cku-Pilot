const html = document.querySelector('html');
const body = document.querySelector('body');

var Init = {
	defaults: function () {
		this.resize();
		window.addEventListener("resize", this.resize);
	},
	resize: function () {
		Init.getBrowserSize();

		Init.breakpoint = window.matchMedia('(min-width:992px)').matches;
		if (!Init.breakpoint) {
			$('html').removeClass('is-desktop');
			$('html').addClass('is-mobile');
		} else {
			$('html').removeClass('is-mobile');
			$('html').addClass('is-desktop');
		}
	},
	getBrowserSize: function () {
		this.bodyHeight = Math.max(
			document.body.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight
		);
		this.bodyWidth = Math.max(
			document.body.scrollWidth,
			document.body.offsetWidth,
			document.documentElement.clientWidth,
			document.documentElement.scrollWidth,
			document.documentElement.offsetWidth
		);
	},
};

var Common = {
	init: function () {
		this.scrolling();
		this.event();
		this.common();
		window.addEventListener('mousewheel', Common.scrolling);
		window.addEventListener('touchmove', Common.scrolling);
		$(window).scroll(function () {
			Common.scrolling();
		});
	},
	scrolling: function (e) {
		var scrollTop = $(window).scrollTop();
		var gnbTop = $('#header').height();
		gnbTop = Number(gnbTop);

		if (scrollTop > 50) {
			$('html').addClass('is-scrolled');
		} else {
			$('html').removeClass('is-scrolled');
		}

		//scrollbar bottom check
		if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
			$('html').addClass('is-bottom');
		} else {
			$('html').removeClass('is-bottom');
		}
	},
	event: function () {
		//custom scroll
		$("div:not(.card-wrap) > .overflow-y-scroll").mCustomScrollbar({
			theme: "dark"
		});

		//datepicker
		$('.form-datepicker').datepicker({
			format: "yyyy-mm-dd",
			closeText: "닫기",
			prevText: "이전달",
			nextText: "다음달",
			currentText: "오늘",
			monthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			dayNamesShort: ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"],
			dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
			weekHeader: "주",
			dateFormat: "yy-mm-dd",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			showOtherMonths: true,
			changeMonth: true,
			changeYear: true,
			beforeShow: function (input, inst) {
				$('#ui-datepicker-div').addClass('datepicker-wrapper');
			}
		});
		//timepicker
		$('.form-datetimepicker').datetimepicker({
			format: "yyyy-mm-dd",
			closeText: "닫기",
			prevText: "이전달",
			nextText: "다음달",
			currentText: "오늘",
			monthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			dayNamesShort: ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"],
			dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
			weekHeader: "주",
			dateFormat: "yy-mm-dd",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			showOtherMonths: true,
			changeMonth: true,
			changeYear: true,
			beforeShow: function (input, inst) {
				$('#ui-datepicker-div').addClass('datepicker-wrapper');
			}
		});
		// 년도 월만 선택할수 있는 데이트 피커
		$("#month-datepicker-area").datepicker({
			closeText: '닫기',
			nextText: '다음 달',
			prevText: '이전 달',
			currentText: "오늘",
			changeMonth: true,
			changeYear: true,
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			weekHeader: "주",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			yearSuffix: "년",
			showOn: 'both',
			// buttonText: "달력",
			showButtonPanel: true,
			dateFormat: 'yy-mm',
			yearRange: "-10:+0",
			yearRange: 'c-5:c+5', //년도 범위 선택
			showOtherMonths: true,
			selectOtherMonths: true,
		});
	},
	common: function () {
		$('select.form-control').select2({
			minimumResultsForSearch: -1,
			theme: "style-1",
		});
		$('select.custom-select').select2({
			minimumResultsForSearch: -1,
			theme: "style-2"
		});
		$('select.select-dark').select2({
			minimumResultsForSearch: -1,
			theme: "style-3"
		});
		$(".scroll-y-dark").mCustomScrollbar({
			theme:"dark"
		});
	}
};

var Header = {
	init: function () {
		this.gnb();
		this.menu();
		this.search();
	},
	gnb: function (e) {
		// $('.gnb .dep1 > li > a').on('mouseenter focus', function(e){
		// 	e.preventDefault();
		// 	if($('html').hasClass('is-desktop')){
		// 		$(this).parent().siblings().find('a').removeClass('hover');
		// 		$(this).addClass('hover');
		// 	}
		// });
		// $('.gnb .dep1 > li > a').on('click', function(e){
		// 	if($('html').hasClass('is-mobile')){
		// 		if($(this).closest('li').hasClass('has-treeview')){
		// 			e.preventDefault();
		// 			//$(this).parent().siblings().find('a').removeClass('hover');
		// 			$(this).toggleClass('hover');
		// 		}
		// 	}
		// });
		// $('.gnb').on('mouseleave', function(e){
		// 	e.preventDefault();
		// 	if($('html').hasClass('is-desktop')){
		// 		$('.gnb .hover').removeClass('hover');
		// 	}
		// });


		$('.dep1 > li > a').on('mouseenter focus', function () {
			$(this).parent('li').siblings().removeClass('hover');
			$(this).parent('li').addClass('hover');
		});
		$('.gnb').on('mouseleave', function () {
			$('.dep1 > li').removeClass('hover');
		});

	},
	menu: function (e) {
		$('.header-menu > a').on('click', function (e) {
			e.preventDefault();
			$('html').addClass('show-menu');
		});
		$('.mobile-menu-close').on('click', function (e) {
			e.preventDefault();
			$('html').removeClass('show-menu');
		});
	},
	search: function (e) {
		$('.btn-mobile-search').on('click', function (e) {
			e.preventDefault();
			$('html').toggleClass('show-mobile-search');
			$('.search-area .form-control').focus();
		});
	}
}

var Side = {
	init: function () {
		this.category();
	},
	category: function (e) {
		$('.side-category .dep2 > li > a').on('click', function (e) {
			e.preventDefault();
			$(this).parent().toggleClass('active');
		});
	}
}

Init.defaults();
Common.init();
Header.init();
Side.init();

$(document).ready(function () {
	
});
