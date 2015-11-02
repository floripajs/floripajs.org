(function () {
    'use strict'
    //array of events
    var events = [
		{
			date: {
				day: '19',
				month: 'Dez'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Diego Candido',
							img: 'https://lh3.googleusercontent.com/--GVFKFuK-sg/T8jshId9xGI/AAAAAAAAAdY/o_lFNZhbs6w/s79-no/diego-imagem.png',
							twitter: '',
							github: ''
						}],
					lecture: 'Overview of Meteor'
				},
				{
					talkers: [
						{
							name: 'Darlan Alves',
							img: 'https://avatars0.githubusercontent.com/u/745095?v=3&s=460',
							twitter: 'https://twitter.com/angularjsdev',
							github: 'https://github.com/darlanalves'
						}],
					lecture: 'Clean Code e os 10 mandamentos <br/>da programação'
				},
				{
					talkers: [
						{
							name: 'Eduardo Nunes',
							img: 'https://avatars3.githubusercontent.com/u/582516?v=3&s=460',
							twitter: 'https://twitter.com/edununesp',
							github: 'https://github.com/eduardonunesp'
						}],
					lecture: 'Golang - O poder da simplicidade	'
				},
			],
			location: {
				urlMap: 'https://www.google.com.br/maps/place/Sebrae+Santa+Catarina/@-27.571695,-48.5126095,17z/data=!4m5!1m2!2m1!1ssebrae!3m1!1s0x0000000000000000:0x6f4cfe6b9403e89b?hl=en',
				address: 'Parque Tecnológico Alfa, Rod. SC-401, Km 01 Lote 2, S/n - João Paulo',
				city: 'Florianópolis/SC',
				company: 'SEBRAE SC',
				time: '13h - 18h (Sábado)',
				coffeeBreakFree: false
			},
			introduction: 'Fala galera, esse será o nosso último encontro de 2015, praticamente um encontro de natal, então vamos fazer deste mais um meetup incrível como foram os outros.'
		},
		{
			date: {
				day: '19',
				month: 'Set'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Lívia Amorim',
							img: 'https://pbs.twimg.com/profile_images/631443194153201664/URex41nj_400x400.jpg',
							twitter: 'https://twitter.com/liviavamorim',
							github: 'https://github.com/liviamorim'
						}],
					lecture: 'SVG para leigos: do vetor a animação'
				},
				{
					talkers: [
						{
							name: 'Guilherme Oderdenge',
							img: 'https://pbs.twimg.com/profile_images/658724137632976897/yCDvaX6Y_400x400.jpg',
							twitter: 'https://twitter.com/Chiefgui',
							github: 'https://github.com/Chiefgui'
						}],
					lecture: 'Uma verdade inconveniente sobre as frameworks JavaScript'
				},
				{
					talkers: [
						{
							name: 'Giorgio Fellipe',
							img: 'https://pbs.twimg.com/profile_images/660875767073607680/U52N9wmx_400x400.jpg',
							twitter: 'https://twitter.com/giiorgio_',
							github: 'https://github.com/giorgiofellipe'
						}],
					lecture: 'Ionic Framework - Construindo apps híbridos lindos e performáticos com AngularJS'
				},
				{
					talkers: [
						{
							name: 'Bruno Ventura',
							img: 'https://avatars3.githubusercontent.com/u/4433497?v=3&s=460',
							twitter: '',
							github: 'https://github.com/brunoventura'
						}],
					lecture: 'Crawleando cervejas com NodeJS for dummies'
				}
			],
			location: {
				urlMap: 'https://www.google.com/maps/place/Resultados+Digitais/@-27.571438,-48.50923,15z/data=!4m2!3m1!1s0x0:0x1d58a96fa79bea45',
				address: 'Rodovia SC 401 Km 01 - Parque Tecnológico Alfa - João Paulo',
				city: 'Florianópolis/SC',
				company: '(Resultados Digitais)',
				time: '15h - 20h (Sábado)',
				coffeeBreakFree: true,
				linkMeetup: 'http://www.meetup.com/floripajs/events/225218460/'
			}
		},
		{
			date: {
				day: '18',
				month: 'Jul'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Giordano Lazzareschi',
							img: 'https://avatars2.githubusercontent.com/u/4623190',
							twitter: 'https://twitter.com/thethoser',
							github: 'https://github.com/giolazzareschi',
						},
						{
							name: 'Renie Siqueira',
							img: 'https://avatars3.githubusercontent.com/u/324830',
							twitter: 'https://twitter.com/reniesiqueira',
							github: 'https://github.com/renie',
						}
					],
					lecture: 'Websockets: invertendo<br /> a comunicação na web'
				},
				{
					talkers: [
						{
							name: 'André Gustavo Espeiorín',
							img: 'https://avatars3.githubusercontent.com/u/185327',
							twitter: 'http://twitter.com/espeiorin',
							github: 'http://github.com/espeiorin'
						}],
					lecture: 'JavascriptCore para<br /> integração com iOS'
				},
				{
					talkers: [
						{
							name: 'Aurélio Jargas',
							img: 'https://avatars0.githubusercontent.com/u/282592',
							twitter: 'http://twitter.com/oreio',
							github: 'http://github.com/aureliojargas'
						}],
					lecture: 'Expressões regulares<br /> para JavaScript'
				}
			],
			location: {
				urlMap: 'https://goo.gl/maps/JCHEe',
				address: 'Rua Dr. João Colin, 905, entrada lateral',
				city: 'Joinville/SC',
				company: '(SoftExpert)',
				time: '15h - 20h (Sábado)',
				coffeeBreakFree: true,
				linkMeetup: 'http://www.meetup.com/floripajs/events/223586762/'
			},
			introduction: 'E chegamos ao <b>7º encontro</b> da comunidade de desenvolvedores, designers e interessados em tecnologias front-end de Santa Catarina, a mais ativa do Brasil!<br/><br/>'
			+ 'Depois da épica edições com <b>mais de 60 devs</b> em Floripa, pela segunda vez, vamos sair de ilha. O próximo encontro será em <b>Joinville</b> com talks bacanas e muita gente nova interessada em ensinar, aprender e fazer networking.'
		},
		{
			date: {
				day: '30',
				month: 'Mai'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Gabriel Zigolis',
							img: 'https://avatars3.githubusercontent.com/u/2637502',
							twitter: 'http://twitter.com/zigolis',
							github: 'http://github.com/zigolis'
						}],
					lecture: 'Backbone for You!',
					lectureLink: 'http://zigolis.github.io/backbone-hello-mundo-rest/'
				},
				{
					talkers: [
						{
							name: 'Sérgio Siqueira',
							img: 'https://avatars2.githubusercontent.com/u/2046276',
							twitter: 'http://twitter.com/serg1ors',
							github: 'http://github.com/sergiors'
						}],
					lecture: "Startup's World!",
					lectureLink: 'https://slides.com/sergiors/'
				},
				{
					talkers: [
						{
							name: 'Júnior Rocha (Xuxu)',
							img: 'https://pbs.twimg.com/profile_images/656247793309323264/cr0Ns8B6_400x400.jpg',
							twitter: 'http://twitter.com/juniorocha90',
							github: 'http://github.com/floripajs'
						}],
					lecture: 'Entrega contínua <br/> (Do FTP ao Git)'
				}
			],
			location: {
				urlMap: 'https://goo.gl/9dwjgQ',
				address: 'Rua Patrício Farias - 131, <br /> 2 andar | Itacorubi',
				city: 'Florianópolis/SC',
				company: '(Neoway)',
				time: '15h - 20h (Sábado)',
				coffeeBreakFree: true,
				linkMeetup: ''
			},
			introduction: "Nessa sexta edição do encontro dos apaixonados por TI de SC, contaremos com três talks: Backbone, Startup's World e Entrega contínua. <br>(Rolará a despedida do <strong>Zigolis</strong>, logo rolará um barzinho depois, então tragam as namoradas :D)"
		},
		{
			date: {
				day: '14',
				month: 'Mar'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Ricardo Longa',
							img: 'https://pbs.twimg.com/profile_images/3736504915/9ebbad5037aad68b0da6cb84ad1f46ea_400x400.jpeg',
							twitter: 'https://twitter.com/ricardolonga',
							github: 'http://github.com/ricardolonga'
						}],
					lecture: 'SOLID'
				},
				{
					talkers: [
						{
							name: 'Deivis Wingert',
							img: 'https://pbs.twimg.com/profile_images/679812005/cousin-itt_400x400.jpg',
							twitter: 'https://twitter.com/DeivisWingert',
							github: 'https://github.com/deiviswingert'
						}],
					lecture: 'Programação funcional'
				},
				{
					talkers: [
						{
							name: 'Renan Carvalho',
							img: 'https://pbs.twimg.com/profile_images/1113214394/REnan_400x400.jpg',
							twitter: 'http://twitter.com/rcarvalhojs',
							github: 'http://github.com/renancarvalho'
						}],
					lecture: 'Testes unitários'
				}
			],
			location: {
				urlMap: 'https://www.google.com/maps?ll=-27.545075,-48.501297&z=16&t=m&hl=en-US&gl=BR&mapclient=embed&cid=6964086146404098475',
				address: 'Primavera Garden Center - SC 401, <br /> Km 4 | Saco Grande',
				city: 'Florianópolis/SC',
				company: '(ACATE)',
				time: '15h - 19h (Sábado)',
				coffeeBreakFree: true
			},
			introduction: 'Nessa quinta edição do encontro dos apaixonados por TI de SC, contaremos com três talks: SOLID, Programação funcional e Testes unitários.'
		},
		{
			date: {
				day: '31',
				month: 'Jan',
				videoLink: 'https://plus.google.com/b/105163745880818582482/105163745880818582482/videos'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Danillo Corvalan',
							img: 'https://pbs.twimg.com/profile_images/427761427470770176/T3pW3F_t.jpeg',
							twitter: 'https://twitter.com/DanilloCorvalan',
							github: 'http://github.com/DanilloCorvalan'
						}],
					lecture: 'Building your front-end with WebPack',
					lectureLink: 'http://www.slideshare.net/danillocorvalan/bundling-your-frontend-with-webpack'
				},
				{
					talkers: [
						{
							name: 'Christian James',
							img: 'https://pbs.twimg.com/profile_images/378800000788442123/59346a48d93d49ec019a617df862fab5.jpeg',
							twitter: 'https://twitter.com/contatojames',
							github: 'https://github.com/christianjames'
						}],
					lecture: 'Introdução à Test-Driven Development',
					lectureLink: 'https://docs.google.com/presentation/d/1YVwQ05HGiMz4qFEp14f8p3QmB6mZFCV4o3A1c1uf_QE/edit?usp=sharing'
				},
				{
					talkers: [
						{
							name: 'Gustavo Isensee',
							img: 'https://pbs.twimg.com/profile_images/595785718267514883/kbPBwZoS_400x400.jpg',
							twitter: 'https://twitter.com/gustavoisensee',
							github: 'http://github.com/gustavoisensee'
						},
						{
							name: 'Rodrigo Silva',
							img: 'https://pbs.twimg.com/profile_images/463495788681641984/vx5CGZzd.jpeg',
							twitter: 'https://twitter.com/rsmelo',
							github: 'https://github.com/rsmelo'
						},

					],
					lecture: 'Continuous Integration with Team City',
					lectureLink: 'http://pt.slideshare.net/aerogustavo/integrao-contnua-44093813'

				}
			],
			location: {
				urlMap: 'https://www.google.com/maps/place/Servid%C3%A3o+55/@-27.587148,-48.544639,16z/data=!4m2!3m1!1s0x0:0x5fcdc6466febf506?hl=pt-BR',
				address: 'Servidão 55, nº 54 - Centro',
				city: 'Florianópolis/SC',
				company: '(SmartMob Coworking)',
				time: '15h - 19h (Sábado)',
				coffeeBreakFree: false
			},
			introduction: 'Nessa quarta edição do encontro dos apaixonados por TI de SC, contaremos com três talks: Building your front-end with WebPack, Introdução à Test-Driven Development e Continuous Integration with Team City.'
		},
		{
			date: {
				day: '13',
				month: 'Dez',
				videoLink: 'https://www.youtube.com/watch?v=_N5uQk6MWow'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Luiz Estácio',
							img: 'https://pbs.twimg.com/profile_images/551289243973066753/nwohwEz_.png',
							twitter: 'http://twitter.com/luizstacio',
							github: 'http://github.com/luizstacio'
						}],
					lecture: 'Angular (blogMV*)',
					lectureLink: 'https://docs.google.com/presentation/d/1UwXIwOClqmjgp8iAnDX3y339__PLJsyCHdReU5CE5a0/edit?usp=sharing'
				},
				{
					talkers: [
						{
							name: 'Renan Carvalho',
							img: 'https://pbs.twimg.com/profile_images/1113214394/REnan_400x400.jpg',
							twitter: 'http://twitter.com/rcarvalhojs',
							github: 'http://github.com/renancarvalho'
						}],
					lecture: 'Backbone (blogMV*)',
					lectureLink: 'http://www.slideshare.net/renancarvalho583/backbone-the-good-parts'
				},
				{
					talkers: [
						{
							name: 'Sérgio Siqueira',
							img: 'https://avatars2.githubusercontent.com/u/2046276',
							twitter: 'http://twitter.com/serg1ors',
							github: 'http://github.com/sergiors'
						}],
					lecture: 'React (blogMV*)',
					lectureLink: 'https://slides.com/sergiors/react'
				}
			],
			location: {
				urlMap: 'http://maps.google.com/maps?f=q&hl=en&q=Rua+240%2C+N%C2%BA+345+-+Sala+4%2C+Meia+Praia+%28Acima+do+escrit%C3%B3rio+de+contabilidade+MJB%29%2C+Itapema%2C+br',
				address: 'Rua 240, Nº 345 - Sala 4, Meia Praia',
				city: 'Itapema/SC',
				company: '(Chute)',
				time: '15h - 19h (Sábado)',
				coffeeBreakFree: false
			},
			introduction: 'Nessa terceira edição do encontro dos apaixonados por TI de SC, contaremos com uma mesa redonda onde os talkers falarão sobre Angular, Backbone e React.'
		},
		{
			date: {
				day: '01',
				month: 'Nov',
				videoLink: 'https://www.youtube.com/watch?v=3911QNjlkPQ'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Guilherme Oderdenge',
							img: 'https://avatars3.githubusercontent.com/u/1330257',
							twitter: 'http://twitter.com/chiefgui',
							github: 'http://github.com/chiefgui'
						}],
					lecture: 'Gulp na veia!!!',
					lectureLink: 'http://chiefgui.github.io/gulp-ftw/'
				},
				{
					talkers: [
						{
							name: 'Pedro Nauck',
							img: 'https://pbs.twimg.com/profile_images/638244042447409152/Ku5PUub9_400x400.jpg',
							twitter: 'http://twitter.com/pedronauck',
							github: 'http://github.com/pedronauck'
						}],
					lecture: 'ES6 hoje (Grunt)',
					lectureLink: 'https://speakerdeck.com/pedronauck/es6-using-the-new-javascript-today'
				},
				{
					talkers: [
						{
							name: 'Thiago Vieira',
							img: 'https://pbs.twimg.com/profile_images/2218363885/profile3.png',
							twitter: 'http://twitter.com/thiagovieiracom',
							github: 'http://github.com/thiagovieiracom'
						}],
					lecture: 'UX na equipe Dev',
					lectureLink: 'http://pt.slideshare.net/thiagovieiracom/ux-designer-em-time-de-developers'
				}
			],
			location: {
				urlMap: 'https://goo.gl/maps/p3xHG',
				address: 'Rua Emílio Blum, 131 - Centro',
				city: 'Florianópolis/SC',
				company: '(Emailmanager)',
				time: '15h - 18h (Sábado)',
				coffeeBreakFree: false
			},
			introduction: 'Nessa segunda edição do encontro dos apaixonados por TI de Santa Catarina o macro-tema é automatização de processos.'
		},
		{
			date: {
				day: '17',
				month: 'Set',
				videoLink: 'https://www.youtube.com/watch?v=DwFnBK10yjQ'
			},
			talks: [
				{
					talkers: [
						{
							name: 'Gabriel Zigolis',
							img: 'https://avatars3.githubusercontent.com/u/2637502',
							twitter: 'http://twitter.com/zigolis',
							github: 'http://github.com/zigolis'
						}],
					lecture: 'blogMV* (Backbone)',
					lectureLink: 'http://zigolis.github.io/backbone-hello-mundo-rest/'
				},
				{
					talkers: [
						{
							name: 'Diogo Moretti',
							img: 'https://pbs.twimg.com/profile_images/520362913148588034/O3Iid-Rx_bigger.jpeg',
							twitter: 'http://twitter.com/diogomoretti_',
							github: 'http://github.com/diogomoretti'
						}],
					lecture: 'Grid System',
					lectureLink: 'http://diogomoretti.github.io/grider/'
				},
				{
					talkers: [
						{
							name: 'Bruno Possidonio',
							img: 'https://pbs.twimg.com/profile_images/502807700624125952/s7pCAr7C_400x400.jpeg',
							twitter: 'http://twitter.com/pssdn',
							github: 'http://github.com/pssdn'
						}],
					lecture: 'Git Flow',
					lectureLink: 'https://github.com/pssdn/mustached-nemesis'
				}
			],
			location: {
				urlMap: 'https://www.google.com.br/maps/@-27.6406575,-48.4749059,3a,72.5y,290.11h,89.67t/data=!3m4!1e1!3m2!1sH6g41oGw89Xrh52fLQXYhg!2e0?hl=pt-BR',
				address: 'Dr. Antônio Luiz Moura Gonzaga, 866 - Porto da Lagoa',
				city: 'Florianópolis/SC',
				company: '(Taller)',
				time: '19h - 22h',
				coffeeBreakFree: false
			},
			introduction: 'É uma iniciativa dos devs de SC para contribuir com o crescimento profissional da comunidade como um todo, através da troca de experiências e visões acerca de problemas e tecnologias.'
		}
    ],
		containerMaster = document.getElementById('containerMaster');

    //Validate if ES6 arrow-fuctions are supported by the browser
	//We use arrow functions to validation because it's the part of 
	//ES6 used in this script less supported by the browsers 	
    var es6Supported = function(){
    	"use strict";
    		if (typeof Symbol == "undefined"){ 
				return false;
			}
    		try {
          		eval("var bar = (x) => x+1");
    		} catch (e) { 
				return false; 
			}
    	return true;
	}();

    // requirejs configurations
    window.requirejs.config({
        baseUrl: 'assets/js/lib',
        paths: {
            es5App: '../es5App.min',
            es6App: '../es6App.min',
            underscore: 'underscore.min'
        },
        shim: {
            es5App: {
                deps: ['underscore'],
                exports: 'es5App'
            },
            underscore: {
                exports: '_'
            }
        }
    });
	
    if (es6Supported) {
		console.log('es6 mode');
        window.requirejs(["es6App"], function (es6App) {
			containerMaster.innerHTML = es6App.createEventsTemplate(events); 
        });
    } else {
		console.log('es5 mode');
        window.requirejs(["es5App"], function (es5App) {
            es5App(events, containerMaster);
        });
    }

    //Initializes the google analytics's component 
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-41143432-1', 'floripajs.org');
    ga('send', 'pageview');

})();