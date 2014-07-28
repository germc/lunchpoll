var scroller = {
	parallaxes: [],
	prefix: null,
	prev_pos: 0,
	scroll_pos: null,
	win: {w:null, h:null},
	transforms: ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'skew', 'skewX', 'skewY'],
	
	calc: function(){
		this.win.w = window.innerWidth;
		this.win.h = window.innerHeight;
	},
	init: function(){
		this.calc();
		this.setPrefix();
		
		var scroller = setInterval(this.render, 15);

		window.addEventListener('resize', function(){
			scroller.calc();
		});
	},
	render: function(){
		this.scroll_pos = window.pageYOffset;		
		if(this.prev_pos!=this.scroll_pos){
			this.prev_pos=this.scroll_pos;
			for(var x=0, len=this.parallaxes.length; x<len; x++){
				this.parallaxes[x].draw();
			}
		}
	},
	setPrefix: function(){
		var pre = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'oTransform'];
		var el = document.createElement('div');
		for (var x=0, len=pre.length; x<len; x++){
			if(pre[x] in el.style){
				this.prefix = pre[x];
			}
		}
	}
};

function Parallax(el){
	this.el = el;
	this.box_pos = this.el.getBoundingClientRect();	
	this.dist = scroller.win.h + this.box_pos.height;
	this.percent = null;
	
	this.shifts = [];
	
	this.draw = function(){		
		var overlap = scroller.scroll_pos + scroller.win.h - this.box_pos.top;
		this.percent = overlap / this.dist;		
		var transforms = '';
		
		if(this.inFrame()){
			for(var x=0, len=this.shifts.length; x<len; x++){
				var s = this.shifts[x];
				
				if(s.is_transform){
					transforms += s.property+'('+ this.getValue(this.percent, s) +') ';
				}else{
					this.el.style[s.property] = this.getValue(this.percent, s);
				}
			}
			this.el.style[scroller.prefix] = transforms;
		}
	};
	this.getValue = function(percent, shift){
		var incr = shift.distance * percent;
		var val = shift.start_val + incr;
		val = (shift.unit=='px') ? Math.round(val): val.toFixed(2);
		return val + shift.unit;
	};
	this.inFrame = function(){
		return this.percent<=1 && this.percent>=0;
	};
	this.newShift = function(shift){
		shift.is_transform = (scroller.transforms.indexOf(shift.property)>-1);
		shift.distance = shift.end_val - shift.start_val;
		this.shifts.push(shift);
	};
}