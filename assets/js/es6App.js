 define(function () {
    'use strict';
    const createTalkerHmltString = function (talker) {
            if (!talker) {
                 return '<div class="members clearfix"></div>';
            }
            var talkerTwitterTemplate = `<a href="${talker.twitter}" title="Twitter - ${talker.name}" target="_blank" class="icon-font icon-twitter-circled">
                                			<span>Twitter</span>
                            			</a>`,
                talkerGitHubTemplate = `<a href="${talker.github}" title="GitHub - ${talker.name}" target="_blank" class="icon-font icon-github-circled">
                        			     <span>GitHub</span>
                    			       </a>`,
                template = `<div class="members clearfix">
                			     <span class="avatar" title="${talker.name}" style="background-image: url(${talker.img});">
                    			     <span><span></span></span>
                			     </span>
                			     <span class="geek">${talker.name}</span>
			                     ${talker.twitter ? talkerTwitterTemplate : ''}
							     ${talker.github ? talkerGitHubTemplate : ''}
            			    </div>`;
                            
            return template;
        },
        createTalksHtmlString = function (talks) {
            var talksTemplates = '',
                talktemplate;
            for (var index = 0; index < talks.length; ++index) {
                talktemplate = '';
                talks[index].talkers.map((talker, idx) => {
                    talktemplate += createTalkerHmltString(talker, idx);
                });
                if (talks[index].lecture) {
                    if (talks[index].lectureLink) {
                        talktemplate += `<strong>
                                            <a href="${talks[index].lectureLink}" target="_blank">
                                                ${talks[index].lecture}
                                            </a>
                                          </strong>`;
                    } else {
                        talktemplate += `<strong>
                                            ${talks[index].lecture}
                                         </strong>`;
                    }
                }
                talksTemplates += `<li class="talks">${talktemplate}</li>`;
            }

            return `<ul class="talks-ct">${talksTemplates}</ul>`;
        },
        createEventHtmlString = function (event, eventIndex) {
            var talksTemplate = createTalksHtmlString(event.talks),
                eventIntroTemplate = `<p class="introduction highlight">
                                    Tem algo bacana para nos contar?
                                </p>
                                <p class="introduction">
                                    <a href="http://goo.gl/forms/A8KruCEtdj" target="_blank">
                                        Então clique e envie a sua idéia!
                                    </a>
                                </p>
                                <p class="introduction highlight">Floripa Devs Meetup?</p>
                                <p class="introduction">${event.introduction}</p>`,
                eventLocationTemplate = `<a href="${event.location.linkMeetup}" class="confirm-meetup" title="Confirme presença no Meetup">

                                            <b>Confirme sua presença no evento</b>

                                            <svg class="meetup-logo" viewBox="0 0 625 370" style="background-color:#ffffff" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                                                x="0px" y="0px" width="309px" height="206px"
                                            >
                                                <g>
                                                    <path d="M 233 194.2071 C 232.1801 191.5349 229.8165 190.0594 226.3122 188.9864 C 223.3331 193.5212 218.6999 196.0313 213.2206 196.0313 C 207.4003 196.0313 201.6192 193.1293 198.147 188.437 C 194.8304 183.9616 194.0176 178.377 196.9492 172.1322 C 201.6525 173.0747 206.2524 173.9343 210.5398 173.9343 C 214.1 173.9343 217.3025 173.3791 220.0011 173.0747 C 219.1669 162.8514 220.3754 155.6747 221.66 148.0828 C 222.7271 141.7389 223.8334 135.1932 224.0663 127.2723 C 218.1272 122.8634 211.8077 120.6123 204.7587 120 C 187.3631 133.0529 179.2885 153.0585 180.0491 181.0002 C 182.4281 193.3579 199.0192 201 213.0388 201 C 221.5839 201.0012 228.7566 198.273 233 194.2071 ZM 202.4415 165.744 C 200.7303 165.744 199.0109 165.6076 197.7382 163.8545 C 198.1232 157.2143 200.3335 152.2514 202.4795 147.4646 C 203.4397 145.3092 204.4034 143.1618 205.1889 140.8477 L 206.1478 138.1231 L 206.9393 140.8886 C 208.7942 147.3036 208.2036 159.2613 205.3303 165.6962 L 202.4415 165.744 ZM 183 196.9309 C 181.4263 194.0389 179.1568 192.6905 175.9225 192.6905 C 173.4527 192.6905 170.635 193.3995 167.9214 194.1585 C 165.1437 194.9163 162.294 195.6416 159.7223 195.6416 C 159.0116 195.6416 158.3501 195.4641 157.6931 195.3271 C 154.603 194.7306 152.1034 192.7705 150.2871 190.0411 C 147.0047 185.0904 146.2013 176.9773 149.1438 167.098 C 153.8877 168.3966 161.9279 168.7193 168.4606 168.7193 C 169.0111 168.7193 171.1923 169.1335 172.1869 169.5455 C 175.4006 156.3193 173.669 138.2887 171.095 127.9161 C 169.1025 127.4937 167.332 126.7568 165.5638 126.1429 C 162.4679 125.059 159.5712 124.0064 155.6044 124.0064 C 154.9212 124.0064 154.2104 123.9739 153.5032 124.0552 C 140.9401 125.7645 132.3965 143.6351 130.4498 160.4252 C 128.6438 175.9155 131.9376 194.5194 146.5516 200.2395 C 149.5616 201.4151 153.3029 202 157.6565 202 C 166.3454 202 176.4272 199.5304 183 196.9309 ZM 156.9343 159.5722 L 153.0285 160.2704 C 152.3555 159.9768 147.9066 159.376 147.9066 159.376 C 147.9066 159.376 148.8902 146.1314 156.0073 140.1385 C 157.6931 147.0202 158.0376 154.1039 156.9343 159.5722 ZM 121.4268 164.2076 C 118.1398 148.1444 114.7552 131.8328 109.007 119.1012 C 108.3267 119.1636 102.5988 118.6172 100.8333 118.3333 C 99.1568 118.0399 94.223 118.6477 94 118.5 C 84.8337 130.9247 81.9973 148.4685 77.8548 165.4763 C 75.5639 161.4485 73.4645 157.3153 71.3832 153.0851 C 67.7058 145.651 63.9049 138.0155 59.5979 131.8971 C 58.3922 131.7945 57.2152 131.7849 56.0898 131.7849 C 51.1579 131.7849 46.6805 132.6758 42.4739 133.9043 L 42.2567 145.3192 C 41.7945 164.923 41.4013 181.8502 46.3322 197.828 C 47.248 197.9796 48.1791 198.0553 49.1034 198.0553 C 55.0114 198.0553 60.239 195.1639 62.5078 194.0055 C 62.8696 188.9918 62.2466 185.0801 61.6055 180.9267 C 61.2639 178.7958 60.9155 176.6525 62.0409 173.8647 C 65.4666 178.3221 68.479 183.2091 71.4798 188.0923 C 73.3918 191.186 75.3027 194.2654 76.7649 196.9227 C 77.7543 197.0254 78.6873 197.0656 79.5782 197.0656 C 81.8872 197.0656 83.9273 196.7789 85.9617 196.5017 C 88.0784 196.215 90.1731 195.9474 92.5692 195.9474 L 93.929 196.4442 C 96.6437 190.4016 96.7921 181.5184 96.9327 172.9152 C 97.06 165.0198 97.2026 156.8722 100.702 150.8008 C 104.5201 168.4348 109.7238 185.5682 116.5781 203.1485 C 118.9895 202.8177 121.6603 201.9891 124.1301 201.2238 C 125.9673 200.6504 127.6314 200.1095 128.9538 200.1095 C 129.6266 200.1123 123.9664 176.7138 121.4268 164.2076 ZM 385.4951 131.6436 C 378.1671 127.3454 371.7845 125.2749 365.9655 125.2749 C 358.7217 125.2749 352.4424 128.5374 346.7622 135.2686 C 336.0706 147.9187 333.842 174.2566 332.3062 187.5176 C 331.6631 187.7957 330.9579 188.0105 330.243 188.2167 C 328.3895 188.7671 326.6432 189.2908 325.9733 190.1586 C 331.5913 196.6846 332.6995 207.7485 333.7712 218.4356 C 334.6104 226.6848 335.4506 230.2103 337.861 236.0065 C 339.2007 236.298 341.0762 236.4457 343.6044 236.4457 C 344.7881 236.4457 346.034 236.4093 347.2713 236.4093 C 349.3612 236.4093 351.4204 236.5042 353.0501 237 C 349.1602 227.1665 347.6416 218.8383 348.8473 199.364 C 364.7101 195.6048 378.8053 184.326 385.6252 169.9277 C 389.738 161.2277 393.0164 147.4699 385.4951 131.6436 ZM 369.0429 136.4568 L 369.507 137.2854 C 374.7136 146.7699 373.1997 156.0366 371.0075 162.1368 C 367.4085 172.1267 359.07 181.2083 349.2578 183.8657 C 352.3305 167.0728 356.5954 148.2122 368.3549 137.1013 L 369.0429 136.4568 ZM 327.2749 154.2059 C 323.8357 151.3884 319.5756 146.5215 314.7164 146.5215 L 313.6178 146.5215 C 313.0954 146.5215 312.6533 147.8555 312.4121 147.6109 L 312.2916 152.6955 C 311.9652 166.6355 311.5012 185.9429 298.201 190.572 C 296.9331 182.2066 296.5925 173.0674 296.2709 164.8901 C 296.1016 160.5334 295.9408 156.5813 296.0882 153.8175 C 294.7925 153.1951 293.6002 152.5257 292.4308 151.8094 C 289.1219 149.8204 286.0138 147.9648 280.9891 147.305 C 278.9834 171.2722 281.391 187.1436 288.1209 194.4655 C 290.8941 197.4863 294.4633 199.0313 298.7283 199.0313 C 301.7292 199.0313 305.1281 198.2928 308.5089 197.0931 L 309.795 195.1109 C 312.1978 191.4226 313.77 188.9781 317.3603 186.244 C 318.2761 184.6013 319.254 182.5787 320.2454 181.0031 C 324.6395 173.9382 328.7935 166.3832 327.2749 154.2059 ZM 277.2466 163.8196 C 275.505 162.4214 274.0314 160.7805 272.553 159.1109 C 269.7617 155.976 267.1177 153.0175 262.826 151.8629 C 261.937 151.8811 261.759 152.5293 261.6605 154.5145 C 261.5705 156.1102 261.4375 158.5672 259.0079 158.5672 L 257.3381 158.5854 L 257.4089 158.0033 C 258.007 150.8799 257.4845 142.6767 256.9132 133.5844 C 256.1266 120.6917 255.2999 108.6342 257.5869 97.7295 C 254.7554 94.326 250.4368 92.5241 242.0773 92.5241 C 241.9653 92.5241 239.937 92.6641 239.7494 92.2881 C 235.449 105.5539 238.0487 117.8051 240.0725 133.6937 C 241.2333 142.7591 242.3318 151.2155 240.9921 159.4197 C 239.3395 159.4197 237.6611 159.2116 236.0344 159.0841 C 234.5923 158.9613 233.1675 158.8089 231.89 158.8089 C 229.492 158.8089 228.0585 159.2279 227.1973 160.2071 C 226.2232 161.3013 225.9332 163.1771 225.9858 165.4413 C 229.291 167.715 235.0076 167.8675 240.5319 168.0104 L 244.0112 168.8073 C 244.1624 173.6503 244.5432 178.2688 244.9126 182.9008 C 245.4753 189.6818 246.0293 196.6911 245.8905 204.3362 C 247.3546 204.13 248.6723 204.0581 249.9498 203.9775 C 252.4243 203.8212 254.764 203.6735 257.4175 203.36 C 257.3323 197.9483 257.1314 192.7918 256.9391 187.829 C 256.6759 180.8964 256.4261 174.3129 257.0242 167.201 C 259.472 166.4981 262.4413 166.337 265.3044 166.1845 C 270.1004 165.916 275.0668 165.6427 277.2466 163.8196 Z" fill="#000000" class="text"/>
                                                    <path d="M 5 76 L 425 76 L 425 249 L 5 249 L 5 76 ZM 28.6 0 C 12.8045 0 0 12.8045 0 28.6 L 0 257.4 C 0 273.1956 12.8045 286 28.6 286 L 401.4 286 C 417.1956 286 430 273.1956 430 257.4 L 430 28.6 C 430 12.8045 417.1956 0 401.4 0 L 28.6 0 Z" fill="#f20000" class="box"/>
                                                </g>
                                            </svg>
                                        </a>`,
                template = `<div class="container ${ eventIndex > 0 ? 'past' : ''}">
					 	${ eventIndex === 0 ? '<h2 class="subtitle">Próximo encontro</h2>' : '' }
  						${ eventIndex === 1 ? '<h2 class="subtitle">Encontros anteriores</h2>' : '' }
                        <div class="col-8">
                            <div class="talks-title">
                                <h3>
                                    <span>${event.date.day}<small>${event.date.month}</small></span>
                                    Exposições de casos
                                    ${event.date.videoLink ? `<a href="${event.date.videoLink}" target="_blank">Assista aos vídeos &raquo;</a>` : '' }
                                </h3>
                            </div>
                            ${talksTemplate}
                            ${event.introduction ? eventIntroTemplate : ''}
                        </div>
                        <div class="col-4">
                            <a href="${event.location.urlMap}" target="_blank" class="map" title="Onde é o local?">
                                <span><span></span></span>
                            </a>
                            <ul class="details">
                                <li>
                                    <div class="details-location">
                                        <i class="icon-location"></i>
                                        ${event.location.address}
                                    </div>
                                    <div>
                                        <span class="location">
                                            ${event.location.city}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="location bold">
                                            <a href="${event.location.urlMap}" target="_blank">
                                                ${event.location.company}
                                            </a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <i class="icon-clock"></i>
                                    ${event.location.time}
                                </li>
                                <li>
                                    <i class="icon-ticket"></i>
                                    Inscrição gratuita ${ event.location.coffeeBreakFree ? '(Coffee-break Free)' : ''}
                                    ${event.location.linkMeetup ? eventLocationTemplate : ''}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="split"><i></i></div>`;

            return template;
        },
        createEventsTemplate = function(events) {
            if (events) {
                 if (Object.prototype.toString.call(events) !== '[object Array]') {
                      throw "'events' need be an array"
                    }
                return events.map((event, index) => {
                    return createEventHtmlString(event, index);
                }).join('');
            }
            throw "Events not received";
        };

    return {
        createEventsTemplate: createEventsTemplate
    };
});