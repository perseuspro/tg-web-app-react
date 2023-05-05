const tg = window.Telegram.WebApp;

export function useTelegram(){
	console.log(tg)
	const onClose =()=>{
		tg.close()
	}

	const onTogleButton =()=>{
		if(tg.MainButton.isVisible) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}
	return {
		onClose,
		onTogleButton,
		tg,
		user: tg.initDataUnsafe?.user?.username
	}
}