var rocket={
	height:'100',
	color:'Metal Gray',
	engines:2,
	isOn:false,
	seats: [
	'1',
	 '2',
	  '3'
	],

	turnOn: function(){	
		this.isOn = true;
	},
	rocketOffOn: function(onOff){
		if(onOff==true){
			this.isOn=true;
		}else{
			this.isOn=false;
		}

	}

}