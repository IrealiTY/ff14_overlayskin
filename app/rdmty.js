// fiddle: http://jsfiddle.net/v1ddnsvh/8/
/* global window */

var IMAGE_PATH = 'images';
var EncountersArray = [];

var React = window.React;

var formatNumber = function(number)  {
    number = parseFloat(number, 10);

    if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
    }
    else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'K';
    }

    return number.toFixed(2);
};

function checkThousand(n) {
 var reg = /(^[+-]?\d+)(\d{3})/;   

 n += '';                         

  while (reg.test(n))
  n = n.replace(reg, '$1' + ',' + '$2');
 return n;
}

function getStrCuts(str) {
        ns = str.substr(0, str.length-1);
        if (ns.length != str.length) {
            ns = ns + "";
        }
        return ns;
    }



var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){CombatantCompact[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;CombatantCompact.prototype=Object.create(____SuperProtoOf____Class0);CombatantCompact.prototype.constructor=CombatantCompact;CombatantCompact.__superConstructor__=____Class0;function CombatantCompact(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
    Object.defineProperty(CombatantCompact.prototype,"jobImage",{writable:true,configurable:true,value:function(job) {"use strict";
        if (window.JSFIDDLE) {
            return window.GLOW_ICONS[job.toLowerCase()];
        }

        return IMAGE_PATH + '/glow/' + job.toLowerCase() + '.png';
    }});

    Object.defineProperty(CombatantCompact.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        //var width = parseInt(this.props.data.damage / this.props.encounterDamage * 100, 10) + '%';
        var width = Math.min(100, parseInt(this.props.total / this.props.max * 100, 10)) + '%';

        return (
            this.props.perSecond === '---' ? null :
            React.createElement("li", {
                className: 'row ' + this.props.job.toLowerCase() + (this.props.isSelf ? ' self' : ''), 
                onClick: this.props.onClick}, 


                React.createElement("div", {
                    className: "bar", 
                    style: {width: width}}),
                    
                React.createElement("div", {
                    className: "bar-back", 
                    style: {width: getStrCuts(width) * this.props.additional1 + '%' }}),     
                 
                    React.createElement("div", {className: "text-overlay"}, 
                        React.createElement("div", {className: "stats"}, 
                            React.createElement("span", {className: "total"}, 
                                this.props.totalFormatted
                            ), 
                            this.props.additional ?
                            React.createElement("span", {className: "additional"}, 
                                this.props.additional
                            ) : null, 
                            "(", 
                            this.props.perSecond ?
                            React.createElement("span", {className: "ps"}, 
                                this.props.perSecond, " ,"
                            ) : null,
                            this.props.TOHIT ?
                            React.createElement("span", {className: "TOHIT"}, 
                                this.props.TOHIT, " , "
                            ) : null,
                            this.props.crithit ?
                            React.createElement("span", {className: "crithit"}, 
                                this.props.crithit
                            ) : null,
                            React.createElement("span", {className: "percent"}, 
                                this.props.percentage
                            ), 
                            ")"
                            ), 
                            React.createElement("div", {className: "info"}, 
                            React.createElement("span", {className: "job-icon"}, 
                            React.createElement("img", {src: this.jobImage(this.props.job)})						
							),
                            React.createElement("span", {className: "rank"}, 
                                this.props.rank, "."
                            ), 
                            React.createElement("span", {className: "character-name"}, 
                                this.props.characterName
                            ),
                            React.createElement("span", {className: "character-job"}, 
                                this.props.job
                            )
                        )
                    )
            )
        );
    }});

CombatantCompact.defaultProps = {
    onClick:function() {}
};

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){ChartView[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;ChartView.prototype=Object.create(____SuperProtoOf____Class1);ChartView.prototype.constructor=ChartView;ChartView.__superConstructor__=____Class1;function ChartView(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
    Object.defineProperty(ChartView.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("div", {className: "chart-view"}
            )
        );
    }});


var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Header[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Header.prototype=Object.create(____SuperProtoOf____Class2);Header.prototype.constructor=Header;Header.__superConstructor__=____Class2;
    function Header(props) {"use strict";
        ____Class2.call(this,props);
        this.state = {
            expanded: false,
            showEncountersList: false
        };
    }

    Object.defineProperty(Header.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        if (nextProps.encounter.encdps === '---') {
            return false;
        }

        return true;
    }});

    Object.defineProperty(Header.prototype,"handleExtraDetails",{writable:true,configurable:true,value:function(e) {"use strict";
        this.props.onExtraDetailsClick(e);

        this.setState({
            expanded: !this.state.expanded
        });
    }});

    Object.defineProperty(Header.prototype,"handleEncounterClick",{writable:true,configurable:true,value:function(e) {"use strict";
        this.setState({
            showEncountersList: !this.state.showEncountersList
        });
    }});

    Object.defineProperty(Header.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var encounter = this.props.encounter;
        var rdps = parseFloat(encounter.encdps);
        var rdps_max = 0;

        if (!isNaN(rdps) && rdps !== Infinity) {
            rdps_max = Math.max(rdps_max, rdps);
        }

        return (
            React.createElement("div", {className: ("header " + (this.state.expanded ? '' : 'collapsed'))}, 
                React.createElement("div", {className: "encounter-header"}, 
                    React.createElement("div", {className: "encounter-data ff-header"}, 
                        React.createElement("span", {className: "target-name dropdown-parent", onClick: this.handleEncounterClick.bind(this)}, 
                            encounter.title, 


                            React.createElement("div", {className: ("dropdown-menu encounters-list-dropdown " + (this.state.showEncountersList ? '' : 'hidden'))}, 
                                React.createElement("div", {onClick: this.props.onSelectEncounter.bind(this, null)}, 
                                    "Last encounter"
                                ), 

                                EncountersArray.map(function(encounter, i) {
                                    return (
                                        React.createElement("div", {key: i, onClick: this.props.onSelectEncounter.bind(this, i)}, 
                                            encounter.Encounter.title
                                        )
                                    );

                                }.bind(this))
                            )



                        ), 
                        React.createElement("span", {className: "duration"}, 
                            "(", encounter.duration, ")"
                        ), 
                        React.createElement("span", {className: ("arrow " + (this.state.expanded ? 'up' : 'down')), onClick: this.handleExtraDetails.bind(this)})
                    ), 

                    React.createElement("div", {
                        className: "chart-view-switcher", 
                        onClick: this.props.onViewChange}, 
                        this.props.currentView
                    )
                ), 
                React.createElement("div", {className: "extra-details"}, 
                    React.createElement("div", {className: "extra-row damage"}, 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Total Damage:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                checkThousand(encounter.damage)
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "RDPS:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                checkThousand(encounter.encdps)
                            )
                        ), 
/*                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Crits"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['crithit%']
                            )
                        ), */
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Misses:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['misses']
                            )
                        )
/*                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Max"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter.maxhit
                            )
                        ) */
                    ), 
                    React.createElement("div", {className: "extra-row healing"}, 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Total Heal:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                checkThousand(encounter.healed)
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "RHPS: "), 
                            React.createElement("span", {className: "value ff-text"}, 
                                checkThousand(encounter.enchps)
                            )
                        )
  /*                      React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Crits"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['critheal%']
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Max"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter.maxheal
                            )
                        )*/
                    )
                )
            )
        );
    }});


Header.defaultProps = {
    encounter: {},
    onViewChange:function() {},
    onSelectEncounter:function() {},
    onExtraDetailsClick:function() {}
};


var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Combatants[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Combatants.prototype=Object.create(____SuperProtoOf____Class3);Combatants.prototype.constructor=Combatants;Combatants.__superConstructor__=____Class3;function Combatants(){"use strict";if(____Class3!==null){____Class3.apply(this,arguments);}}
    Object.defineProperty(Combatants.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        // if data is empty then don't re-render
        if (Object.getOwnPropertyNames(nextProps.data).length === 0) {
            return false;
        }

        return true;
    }});

    Object.defineProperty(Combatants.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var rows = [];
        var maxRows = 24;
        var isDataArray = _.isArray(this.props.data);
        var dataArray = isDataArray ? this.props.data : Object.keys(this.props.data);
        var limit = Math.max(dataArray.length, maxRows);
        var names = dataArray.slice(0, maxRows-1);
        var maxdps = false;
        var combatant;
        var row;
        var isSelf;
        var rank = 1;
        var stats;

        for (var i = 0; i < names.length; i++) {
            combatant = isDataArray ? this.props.data[i] : this.props.data[names[i]];
            stats = null;
            
			if (combatant.Job =="Acn")
			{   
				combatant.Job = 'ACN';
			}
			else if (combatant.Job =="Arc")
			{   
				combatant.Job = 'ARC';
			}			
			else if (combatant.Job =="Blm")
			{   
				combatant.Job = 'BLM';
			}		
			else if (combatant.Job =="Brd")
			{   
				combatant.Job = 'BRD';
			}			
			else if (combatant.Job =="Cnj")
			{   
				combatant.Job = 'CNJ';
			}		
			else if (combatant.Job =="Drg")
			{   
				combatant.Job = 'DRG';
			}				
			else if (combatant.Job =="Gld")
			{   
				combatant.Job = 'GLD';
			}				
			else if (combatant.Job =="Lnc")
			{   
				combatant.Job = 'LNC';
			}				
			else if (combatant.Job =="Mnk")
			{   
				combatant.Job = 'MNK';
			}				
			else if (combatant.Job =="Mrd")
			{   
				combatant.Job = 'MRD';
			}
			else if (combatant.Job =="Nin")
			{   
				combatant.Job = 'NIN';
			}               
			else if (combatant.Job =="Pgl")
			{   
				combatant.Job = 'PGL';
			}				
			else if (combatant.Job =="Pld")
			{   
				combatant.Job = 'PLD';
			}
			else if (combatant.Job =="Rog")
			{   
				combatant.Job = 'ROG';
			}	            
			else if (combatant.Job =="Smn")
			{   
				combatant.Job = 'SMN';
			}			
			else if (combatant.Job =="Thm")
			{   
				combatant.Job = 'THM';
			}			
			else if (combatant.Job =="War")
			{   
				combatant.Job = 'WAR';
			}			
			else if (combatant.Job =="Whm")
			{   
				combatant.Job = 'WHM';
			}			
			else if (combatant.Job =="Sch")
			{   
				combatant.Job = 'SCH';
			}
            else if (combatant.Job =="Drk")
			{   
				combatant.Job = 'DRK';
			}
            else if (combatant.Job =="Mch")
			{   
				combatant.Job = 'MCH';
			}
            else if (combatant.Job =="Ast")
			{   
				combatant.Job = 'AST';
			}
			else if (combatant.Job =="")
			{
                    if (combatant.name.indexOf("Garuda-Egi") === 0) {
                        combatant.Job = "Garuda";
                    }
                    else if (combatant.name.indexOf("Ifrit-Egi") === 0) {
                        combatant.Job = "Ifrit";
                    }
                    else if (combatant.name.indexOf("Titan-Egi") === 0) {
                        combatant.Job = "Titan";
                    }
                    else if (combatant.name.indexOf("Eos") === 0) {
                        combatant.Job = "Eos";
                    }
                    else if (combatant.name.indexOf("Selene") === 0) {
                        combatant.Job = "Selene";
                    }
                    else if (combatant.name.indexOf("Emerald Carbunbcle") === 0) {
                        combatant.Job = "Carbuncle";
                    }
                    else if (combatant.name.indexOf("Topaz Carbuncle") === 0) {
                        combatant.Job = "Carbuncle";
                    }
                    else if (combatant.name.indexOf("Rook Autoturret") === 0) {
                        combatant.Job = "Turret";
                    }
                    else if (combatant.name.indexOf("Bishop Autoturret") === 0) {
                        combatant.Job = "Bishop";
                    }
                    else if (combatant.name.indexOf("Limit Break") === 0) {
                        combatant.Job = "LimitBreak";
                    }
                    else if (combatant.name.match(/[^a-zA-Z()'\s]/)) {
                        combatant.Job = "Chocobo";
                    }
                    else {
                        combatant.Job = "";
                    }
			}

            isSelf = combatant.name === 'YOU' || combatant.name === 'You' || combatant.name === $("#mynameval").val();
            if(isSelf)
            {
                if($("input:checkbox[id='myname']").is(":checked"))
                {
                    combatant.name = $("#mynameval").val();
                }
            }
            
            var virtualname = combatant.name;
            
            if(!$("input:checkbox[id='showname']").is(":checked") && !isSelf)
            {
                virtualname = "";
            }

            if (combatant.Job !== "") {
                // should probably fix this
                if (this.props.currentView === '2. Total Healing') {
                    if (parseInt(combatant.healed, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.healed);
                        }
                        stats = {
                            job: combatant.Job || '',
                            characterName: virtualname,
                            total: combatant.healed,
                            totalFormatted: checkThousand(combatant.healed),
                            perSecond: Math.round(combatant.enchps)+' HPS',
                            additional: '['+checkThousand(Math.round(combatant.healed*(1-getStrCuts(combatant['OverHealPct'])/100)))+']',
							additional1: 1-(getStrCuts(combatant['OverHealPct'])/100),
                            crithit: 'Misses:'+combatant.cures+', ',
                            percentage: combatant['healed%']
                        }
                    }
                }
                else if (this.props.currentView === '3. Damage Received') {
                    if (parseInt(combatant.damagetaken, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.damagetaken);
                        }
                        stats = {
                            job: combatant.Job || '',
                            characterName: virtualname,
                            total: combatant.damagetaken,
                            totalFormatted: checkThousand(combatant.damagetaken),
                            perSecond: 'Heal Received '+checkThousand(combatant.healstaken),
                            percentage: combatant.deaths +" deaths",                            
/*                          perSecond: combatant.ParryPct,
                            percentage: combatant.BlockPct */
                            additional1: 1,
                        }
                    }
                }
                else if (this.props.currentView === '1. Total Damage') {
                    if (!maxdps) {
                        maxdps = parseFloat(combatant.damage);
                    }
                    stats = {
                            job: combatant.Job || '',
                            characterName: virtualname,
                            total: combatant.damage,
                            totalFormatted: checkThousand(combatant.damage),
                            perSecond: Math.round(combatant.encdps)+' DPS',
                            additional1: 1,
                            percentage: combatant['damage%']

                        }
				     }
                else if (this.props.currentView === '4. Acc & Crit') {
                    if (!maxdps) {
                        maxdps = parseFloat(combatant.damage);
                    }
                    stats = {
                        job: combatant.Job || '',
                        characterName: virtualname,
                        total: combatant.damage,
                        crithit: 'Crit '+combatant['crithit%'],
                        TOHIT: 'Acc '+combatant.TOHIT+'%',
                        additional1: 1,
                    }
                }

                if (stats) {
                    rows.push(
                        React.createElement(CombatantCompact, React.__spread({
                            onClick: this.props.onClick, 
                            encounterDamage: this.props.encounterDamage, 
                            rank: rank, 
                            data: combatant, 
                            isSelf: isSelf, 
                            key: combatant.name, 
                            max: maxdps}, 
                            stats)
                        )
                    );
                    rank++;
                }
            }

        }

        return (
            React.createElement("ul", {className: "combatants"}, 
                rows
            )
        );
    }});


Combatants.defaultProps = {
    onClick:function() {}
};

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){DamageMeter[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;DamageMeter.prototype=Object.create(____SuperProtoOf____Class4);DamageMeter.prototype.constructor=DamageMeter;DamageMeter.__superConstructor__=____Class4;
    function DamageMeter(props) {"use strict";
        ____Class4.call(this,props);
        this.state = {
            currentViewIndex: 0
        };
    }

    Object.defineProperty(DamageMeter.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState) {"use strict";
        if (nextProps.parseData.Encounter.encdps === '---') {
            return false;
        }

        if (this.state.currentViewIndex !== nextState.currentViewIndex) {
            return true;
        }

        if (this.state.selectedEncounter) {
            return false;
        }

        return true;
    }});

    Object.defineProperty(DamageMeter.prototype,"componentWillReceiveProps",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        // save this encounter data
        if (this.props.parseData.Encounter.title === 'Encounter' &&
            nextProps.parseData.Encounter.title !== 'Encounter') {
            EncountersArray.unshift({
                Encounter: nextProps.parseData.Encounter,
                Combatant: nextProps.parseData.Combatant
            });

            // Only keep the last 10 fights
            if (EncountersArray.length > 10) {
                EncountersArray.pop();
            }
        }
    }});

    Object.defineProperty(DamageMeter.prototype,"handleCombatRowClick",{writable:true,configurable:true,value:function(e) {"use strict";
    }});

    Object.defineProperty(DamageMeter.prototype,"handleClick",{writable:true,configurable:true,value:function(e) {"use strict";
    }});

    Object.defineProperty(DamageMeter.prototype,"handleViewChange",{writable:true,configurable:true,value:function(e) {"use strict";
        var index = this.state.currentViewIndex;

        if (index > this.props.chartViews.length-2) {
            index = 0;
        }
        else {
            index++;
        }

        this.setState({
            currentViewIndex: index
        });
    }});

    Object.defineProperty(DamageMeter.prototype,"handleSelectEncounter",{writable:true,configurable:true,value:function(index, e) {"use strict";
        if (index >= 0) {
            this.setState({
                selectedEncounter: EncountersArray[index]
            });
        }
        else {
            this.setState({
                selectedEncounter: null
            });
        }

        console.log('handle select', index);
        this.render();
    }});

    Object.defineProperty(DamageMeter.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var data = this.props.parseData.Combatant;
        var encounterData = this.props.parseData.Encounter;

        if (this.state.selectedEncounter) {
            data = this.state.selectedEncounter.Combatant;
            encounterData = this.state.selectedEncounter.Encounter;
        }
        else {
            // Healing
            // need to resort data if currentView is not damage
            if (this.state.currentViewIndex === 1) {
                data = _.sortBy(_.filter(data, function(d)  {
                    return parseInt(d.healed, 10) > 0;
                }), function(d)  {
                    if (this.state.currentViewIndex === 1) {
                        return -parseInt(d.healed, 10);
                    }
                }.bind(this));
            }
            // Tanking
            else if (this.state.currentViewIndex === 2) {
                data = _.sortBy(_.filter(data, function(d)  {
                    return parseInt(d.damagetaken, 10) > 0;
                }), function(d)  {
                    if (this.state.currentViewIndex === 2) {
                        return -parseInt(d.damagetaken, 10);
                    }
                }.bind(this));
            }
	        else if (this.state.currentViewIndex === 3) {
            data = _.sortBy(_.filter(data, function(d)  {
                return parseInt(d.damage, 10) > 0;
            }), function(d)  {
                if (this.state.currentViewIndex === 5) {
                    return -parseInt(d.damage, 10);
                }
            }.bind(this));
        }
		}
        return (
            React.createElement("div", {
                onClick: this.handleClick, 
                className: 'damage-meter' + (!this.props.parseData.isActive ? ' inactive' : '') + (!this.props.noJobColors ? ' show-job-colors' : '')}, 
                React.createElement(Header, {
                    encounter: encounterData, 
                    onViewChange: this.handleViewChange.bind(this), 
                    onSelectEncounter: this.handleSelectEncounter.bind(this), 
                    currentView: this.props.chartViews[this.state.currentViewIndex]}
                    ), 
                React.createElement(Combatants, {
                    currentView: this.props.chartViews[this.state.currentViewIndex], 
                    onClick: this.handleCombatRowClick, 
                    data: data, 
                    encounterDamage: encounterData.damage})
            )
        );
    }});


//<div class="handlecont2"><div class="handlecont_in handlecont_in2">적중, 극대</div></div>
DamageMeter.defaultProps = {
    chartViews: [
        '1. Total Damage',
        '2. Total Healing',
        '3. Damage Received',
        '4. Acc & Crit'
    ],
    parseData: {},
    noJobColors: false
};
