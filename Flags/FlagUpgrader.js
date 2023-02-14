(() => {
	const configKey='flagUpgraderConfig';
	const config=JSON.parse(localStorage.getItem(configKey)) || {
		upgradeAmounts: {amount: 0},
		checkedFlags: []
	};
	const flagConfig={
		1: {color: '#777676'},
		2: {color: '#663d00'},
		3: {color: '#6a1600'},
		4: {color: '#bf9d00'},
		5: {color: '#236800'},
		6: {color: '#003464'},
		7: {color: '#005a67'},
		8: {color: '#300064'}
	}

	let flagLevelToBeUpgraded=undefined;
	let flagsToBeUpgraded=config.checkedFlags;
	let locked=false;

	const reset=() => {
		flagLevelToBeUpgraded=undefined;
		flagsToBeUpgraded=[];
		$('.flagUpgrader_upgrade').value('Upgrade');
		locked=false;
	}

	$('.flag_box').css('margin-right', '0');
	$('#flags_container').before(`<div id="flagUpgraderButtons" style="vertical-align: top;"></div><div id="flagUpgraderInputs"></div>`);
	Object.entries(flagConfig).forEach(
		([ flagLevel, value ]) => {
			flagLevel=Number(flagLevel);
			if (!config.upgradeAmounts[flagLevel]) config.upgradeAmounts[flagLevel]={amount: 0};
			$(`#flag_box_${flagLevel}_1`).before(`<div style="float:left; margin-top: 21px">
                             <input class="flagUpgrader_checkbox" 
                               data-flag="flagLevel" 
                               style="transform: scale(1.3); 
                               margin-right: 0; 
                               margin-left: 0"
                               type="checkbox"${flagLevel}>
                               </div>`);
			$('#flagUpgraderButtons').append(`<input type="button" 
								style="width:62px; margin-right: 5px; color:white; background-color:${value.color}; ${flagLevel === 1 ? 'margin-left: 18px' :''}" 
								class="btn-primary flagUpgrader_upgrade" 
								data-level="${flagLevel}" 
								value="Upgrade"/>`);
			$('#flagUpgraderInputs').append(`<input 
								style="width:54px; margin-right: 5px; ${flagLevel === 1 ? 'margin-left: 18px' :''}" 
								type="text" 
								class="flagUpgrader_input" 
								data-level="${flagLevel}" 
								value="${config.upgradeAmounts[flagLevel].amount || 0}"/>`);
			$(`.flagUpgrader_checkbox[data-flag="${flagLevel}"]`).prop('checked', config.checkedFlags.includes(flagLevel));
		});

	$('.flagUpgrader_checkbox').change(function () {
		const flag=$(this).data('flag');
		if (this.checked) {
			config.checkedFlags.push(flag);
		}
		else {
			config.checkedFlags=config.checkedFlags.filter(item => item !== flag)
		}

		localStorage.setItem(configKey, JSON.stringify(config));
		reset();
	});

	$('.flagUpgrader_upgrade').click(function () {
		const value=$(this).val();
		$('.flagUpgrader_upgrade').value('Upgrade');
		if (value === 'Stop') {
			reset();
		}
		else {
			flagLevelToBeUpgraded=$(this).data('level');
			flagsToBeUpgraded=$(`.flagUpgrader_checkbox:checked`).map((_, el) => $(el).data('flag')).get();
			$(this).value('Stop');
		}
		$(this).blur();
	});

	$('.flagUpgrader_input').change(function () {
		config.upgradeAmounts[parseInt($(this).data('level'))].amount=parseInt($(this).value()) || 0;
		localStorage.setItem(configKey, JSON.stringify(config));
	});

	$(document).keypress(function (e) {
		console.log("I am in the Upgrade function")
		if (((e.keyCode || e.which) === 13) && flagLevelToBeUpgraded && flagsToBeUpgraded.length && !locked) {
			const maxAmount=config.upgradeAmounts[flagLevelToBeUpgraded].amount || 0;
			const flagToUpgrade=flagsToBeUpgraded[0];
			const flagAmount=parseInt($(`#flag_box_${flagToUpgrade}_${flagLevelToBeUpgraded}`).find('.flag_count:visible').text()) || 0;
			if (Math.round(flagAmount) > maxAmount && Math.floor(flagAmount / 3) > 0) {
				locked=true;
				let namePage='flags'
				let createLink={
					ajaxaction: 'upgrade_flag'
				}
				let data={flag_type: flagToUpgrade, from_level: flagLevelToBeUpgraded}
				TribalWars.post(namePage, createLink, data, function (e) {
					FlagsScreen.setFlagCounts(e);
				}, function (e) {
					UI.ErrorMessage(e.error)
				});
				locked=false;
			}
			else {
				flagsToBeUpgraded=flagsToBeUpgraded.filter(item => item !== flagToUpgrade);
				if (!flagsToBeUpgraded.length) {
					$('.flagUpgrader_upgrade').value('Upgrade');
					flagLevelToBeUpgraded=undefined;
				}
			}
		}
	});
})();