const Chapter1Script = [
  // ===== 導入・操作説明 =====
  {type:'text',character:'ナレーション',
    text:'だいいっしょう、くらやみの、はじまり。',
    displayText:'第一章：暗闇の始まり'},

  {type:'text',character:'ナレーション',
    text:'ここからは、がめんが、まっくらになります。このげーむは、めをつぶっても、あそべます。おんせいと、ふりっくそうさだけで、ものがたりが、すすみます。',
    displayText:'ここからは画面が真っ暗になります。このゲームは目をつぶっても遊べます。音声とフリック操作だけで物語が進みます。'},

  {type:'text',character:'ナレーション',
    text:'すまほのかたは、がめんを、たっぷで、せりふすきっぷ。ふりっくで、せんたくし。ながおしで、めにゅーにもどれます。ぱそこんのかたは、くりっくで、すきっぷ。やじるしきーで、せんたくし。えすけーぷきーで、めにゅーです。',
    displayText:'スマホの方は、タップでセリフスキップ。フリックで選択肢。長押しでメニューに戻れます。パソコンの方はクリックでスキップ。矢印キーで選択肢。Escキーでメニューです。'},

  {type:'text',character:'ナレーション',
    text:'せんたくしは、にたくのときは、うえと、した。よんたくのときは、うえ、した、ひだり、みぎ、で、えらびます。まちがった、せんたくをすると、げーむおーばーになることもあります。では、はじめましょう。',
    displayText:'選択肢は二択の時は上と下。四択の時は上下左右で選びます。間違った選択をするとゲームオーバーになることもあります。では始めましょう。'},

  // ===== ストーリー開始 =====
  {type:'silence',duration:2000,displayText:'…………'},

  {type:'text',character:'ナレーション',
    text:'かんぜんな、くらやみ。なにもみえない。じぶんのてすら、みえない。',
    displayText:'完全な暗闘。何も見えない。自分の手すら見えない。'},

  {type:'text',character:'おちぷー',
    text:'おい、まじで、なにもみえないぞ。だれか、ちかくにいるか。こわいんだけど。',
    displayText:'おい、マジで何も見えないぞ！誰か近くにいるか！怖いんだけど！'},

  {type:'text',character:'デブコーン',
    text:'おれはここにいるぜ。おれの、りょうりの、においで、わかるだろ。',
    displayText:'俺はここにいるぜ。俺の料理の匂いでわかるだろ。'},

  // ===== 選択01：暗闇でまず何をする？ =====
  {type:'choice',
    text:'くらやみのなかで、まず、なにをする。',
    displayText:'暗闇の中でまず何をする？',
    choices:[
      {text:'おおきなこえを、だして、なかまをかくにんする',displayText:'大きな声を出して仲間を確認する',jump:'c1_shout'},
      {text:'じっとして、みみをすます',displayText:'じっとして耳をすます',jump:'c1_listen'}
    ]},

  // --- 声を出すルート ---
  {type:'text',label:'c1_shout',character:'ナレーション',
    text:'おおきなこえで、なかまに、よびかけた。',
    displayText:'大きな声で仲間に呼びかけた。'},
  {type:'text',character:'ゆっきん',
    text:'おう、ゆっきん、ここだぜ。おれのみぎがわに、だれかいるな。',
    displayText:'おう、ゆっきんここだぜ。俺の右側に誰かいるな。'},
  {type:'text',character:'かとぱん',
    text:'かとぱん、います。いしゃとして、いっておくが、ぱにっくは、きんもつだぞ。',
    displayText:'かとぱんいます。医者として言っておくがパニックは禁物だぞ。'},
  {type:'text',character:'よっちん',
    text:'よっちん、いるよ。みんな、おちついて。だいじょうぶだから。',
    displayText:'よっちんいるよ。みんな落ち着いて。大丈夫だから。'},
  {type:'text',character:'エディマーシー',
    text:'えでぃまーしー、いるぞ。くるまの、かぎは、にぎってる。いつでも、にげられる。',
    displayText:'エディマーシーいるぞ。車の鍵は握ってる。いつでも逃げられる。'},
  {type:'text',character:'のぶん',
    text:'のぶん、いるよ。おれの、つりざおが、あしもとに、あるから、ふまないでくれ。',
    displayText:'のぶんいるよ。俺の釣り竿が足元にあるから踏まないでくれ。'},
  {type:'text',character:'ちばぶ',
    text:'ちばぶ、います。ちなみに、はちにんぜんいんの、こえが、かくにんできたね。',
    displayText:'ちばぶいます。ちなみに八人全員の声が確認できたね。'},
  {type:'flag',key:'shout_first',value:true},
  {type:'jump',target:'c1_after01'},

  // --- 耳をすますルート ---
  {type:'text',label:'c1_listen',character:'ナレーション',
    text:'いきを、ころして、みみを、すませた。くらやみのなかに、さまざまな、おとが、きこえる。',
    displayText:'息を殺して耳を澄ませた。暗闇の中に様々な音が聞こえる。'},
  {type:'text',character:'ナレーション',
    text:'だれかの、あらい、こきゅう。ぐらすが、かたむくおと。そして、とおくで、すまほの、ばいぶおんの、ような、おとが、きこえた。',
    displayText:'誰かの荒い呼吸。グラスが傾く音。そして遠くでスマホのバイブ音のような音が聞こえた。'},
  {type:'text',character:'ナレーション',
    text:'だれかが、ちいさなこえで、でんわを、しているようだ。',
    displayText:'誰かが小さな声で電話をしているようだ。'},
  {type:'flag',key:'heard_phone',value:true},
  {type:'flag',key:'shout_first',value:false},
  {type:'jump',target:'c1_after01'},

  // ===== 選択02：金属音 =====
  {type:'text',label:'c1_after01',character:'ナレーション',
    text:'そのとき。てーぶるのしたから、からん、という、きんぞくおんが、きこえた。',
    displayText:'その時。テーブルの下から、カラン、という金属音が聞こえた。'},

  {type:'text',character:'おちぷー',
    text:'いまの、なんだ。なんか、おちたぞ。おい、だれか、なんかおとした。',
    displayText:'今の何だ！何か落ちたぞ！おい、誰か何か落とした？'},

  {type:'choice',
    text:'きんぞくおんを、しらべるか。',
    displayText:'金属音を調べるか？',
    choices:[
      {text:'てーぶるのしたに、てを、のばして、しらべる',displayText:'テーブルの下に手を伸ばして調べる',jump:'c1_search_metal'},
      {text:'あやしいから、さわらない',displayText:'怪しいから触らない',jump:'c1_ignore_metal'}
    ]},

  // 調べるルート
  {type:'text',label:'c1_search_metal',character:'ナレーション',
    text:'てーぶるのしたに、てを、のばした。つめたい、きんぞくの、かんしょくが、ゆびさきに、ふれた。',
    displayText:'テーブルの下に手を伸ばした。冷たい金属の感触が指先に触れた。'},
  {type:'text',character:'ナレーション',
    text:'それは、ないふだった。りょうりようではない。するどい、はさきの、ないふ。',
    displayText:'それはナイフだった。料理用ではない。鋭い刃先のナイフ。'},
  {type:'text',character:'ナレーション',
    text:'なぜ、こんなものが、てーぶるのしたに。',
    displayText:'なぜこんなものがテーブルの下に？'},
  {type:'flag',key:'found_knife',value:true},
  {type:'jump',target:'c1_after02'},

  // 触らないルート
  {type:'text',label:'c1_ignore_metal',character:'ナレーション',
    text:'なにか、いやなよかんがして、さわらないことにした。しかし、きんぞくおんの、しょうたいが、きになる。',
    displayText:'何か嫌な予感がして触らないことにした。しかし金属音の正体が気になる。'},
  {type:'flag',key:'found_knife',value:false},
  {type:'jump',target:'c1_after02'},

  // ===== 選択03：聞き耳 =====
  {type:'text',label:'c1_after02',character:'ナレーション',
    text:'しばらく、しずけさがつづく。だれも、うごこうとしない。',
    displayText:'しばらく静けさが続く。誰も動こうとしない。'},

  {type:'choice',
    text:'みみをすませるか、こうどうするか。',
    displayText:'耳を澄ませるか、行動するか？',
    choices:[
      {text:'じっと、みみを、すませる',displayText:'じっと耳を澄ませる',jump:'c1_ear'},
      {text:'たちあがって、こうどうする',displayText:'立ち上がって行動する',jump:'c1_act'}
    ]},

  // 聞き耳ルート
  {type:'text',label:'c1_ear',character:'ナレーション',
    text:'いきをとめて、しゅういのおとに、しゅうちゅうした。',
    displayText:'息を止めて周囲の音に集中した。'},
  {type:'text',character:'ナレーション',
    text:'みせのすみのほうから、ちいさなこえが、きこえる。よっちんの、こえだ。',
    displayText:'店の隅の方から小さな声が聞こえる。よっちんの声だ。'},
  {type:'text',character:'よっちん',
    text:'うん、うん。だいじょうぶ。けいかくどおりだ。あと、すこし、まってくれ。',
    displayText:'うん、うん…大丈夫。計画通りだ。あと少し待ってくれ。',
    lying:true},
  {type:'text',character:'ナレーション',
    text:'よっちんは、だれかと、でんわを、しているようだ。けいかくどおり、とは、どういういみだ。',
    displayText:'よっちんは誰かと電話をしているようだ。「計画通り」とはどういう意味だ？'},
  {type:'flag',key:'heard_plan',value:true},
  {type:'jump',target:'c1_after03'},

  // 行動ルート
  {type:'text',label:'c1_act',character:'ナレーション',
    text:'いすから、たちあがった。しかし、くらやみで、ほうこうかんかくが、くるっている。',
    displayText:'椅子から立ち上がった。しかし暗闇で方向感覚が狂っている。'},
  {type:'text',character:'デブコーン',
    text:'おい、だれだ、おれのあしを、ふんだのは。いてえな。',
    displayText:'おい、誰だ俺の足を踏んだのは！痛えな！'},
  {type:'flag',key:'heard_plan',value:false},
  {type:'jump',target:'c1_after03'},

  // ===== 選択04：よっちんについて =====
  {type:'text',label:'c1_after03'},
  {type:'checkflag',key:'heard_plan',value:true,target:'c1_confront_yocchin',elseTarget:'c1_skip_yocchin'},

  // よっちんの電話を聞いた場合
  {type:'text',label:'c1_confront_yocchin',character:'ナレーション',
    text:'よっちんの、あやしい、でんわの、ないようが、あたまから、はなれない。どうする。',
    displayText:'よっちんの怪しい電話の内容が頭から離れない。どうする？'},

  {type:'choice',
    text:'よっちんの、でんわについて、どうする。',
    displayText:'よっちんの電話について、どうする？',
    choices:[
      {text:'ちょくせつ、よっちんに、といつめる',displayText:'直接よっちんに問い詰める',jump:'c1_ask_yocchin'},
      {text:'だまっておく',displayText:'黙っておく',jump:'c1_silent_yocchin'},
      {text:'ほかのなかまに、つたえる',displayText:'他の仲間に伝える',jump:'c1_tell_others'},
      {text:'きこえなかったふりをする',displayText:'聞こえなかったフリをする',jump:'c1_pretend'}
    ]},

  {type:'text',label:'c1_ask_yocchin',character:'ナレーション',
    text:'よっちんに、むかって、こえを、あげた。おい、よっちん。いま、でんわしてたな。けいかくどおりって、なんのことだ。',
    displayText:'よっちんに向かって声を上げた。'},
  {type:'text',character:'よっちん',
    text:'え。でんわ。してないよ。なんの、ことだ。きのせいだろ。',
    displayText:'え？電話？してないよ。何のことだ。気のせいだろ。',
    lying:true},
  {type:'text',character:'ナレーション',
    text:'よっちんの、こえが、かすかに、ふるえている。あきらかに、うそを、ついている。',
    displayText:'よっちんの声がかすかに震えている。明らかに嘘をついている。'},
  {type:'flag',key:'yocchin_suspicious',value:'high'},
  {type:'jump',target:'c1_after04'},

  {type:'text',label:'c1_silent_yocchin',character:'ナレーション',
    text:'いまは、だまっておくことにした。もうすこし、ようすをみよう。',
    displayText:'今は黙っておくことにした。もう少し様子を見よう。'},
  {type:'flag',key:'yocchin_suspicious',value:'low'},
  {type:'jump',target:'c1_after04'},

  {type:'text',label:'c1_tell_others',character:'ナレーション',
    text:'ちかくにいた、ちばぶに、こっそり、つたえた。',
    displayText:'近くにいたちばぶにこっそり伝えた。'},
  {type:'text',character:'ちばぶ',
    text:'ちなみに、みっしつで、でんわをしている、にんげんは、とうけいてきに、きわめて、あやしいらしいよ。',
    displayText:'ちなみに密室で電話をしている人間は統計的に極めて怪しいらしいよ。'},
  {type:'flag',key:'yocchin_suspicious',value:'medium'},
  {type:'jump',target:'c1_after04'},

  {type:'text',label:'c1_pretend',character:'ナレーション',
    text:'なにも、きこえなかったことにした。よっちんは、きづいていないようだ。あとで、つかえるじょうほうかもしれない。',
    displayText:'何も聞こえなかったことにした。よっちんは気づいていないようだ。後で使える情報かもしれない。'},
  {type:'flag',key:'yocchin_suspicious',value:'hidden'},
  {type:'jump',target:'c1_after04'},

  // 聞いてない場合スキップ
  {type:'text',label:'c1_skip_yocchin',character:'ナレーション',
    text:'くらやみのなかで、ぜんいんが、ふあんそうに、しているのが、こえでわかる。',
    displayText:'暗闇の中で全員が不安そうにしているのが声でわかる。'},
  {type:'flag',key:'yocchin_suspicious',value:'none'},
  {type:'jump',target:'c1_after04'},

  // ===== 選択05：右から物音（左右パン） =====
  {type:'text',label:'c1_after04',character:'ナレーション',
    text:'とつぜん、みぎの、ほうから、がたんっ、という、おおきなおとが、きこえた。',
    displayText:'突然、右の方からガタンッ！という大きな音が聞こえた。',
    pan:1},

  {type:'silence',duration:1500,displayText:'…………'},

  {type:'choice',
    text:'いま、おとが、きこえたのは、どっちのほうこうだ。',
    displayText:'今、音が聞こえたのはどっちの方向だ？',
    choices:[
      {text:'みぎのほうから、きこえた',displayText:'右の方から聞こえた',jump:'c1_right_correct'},
      {text:'ひだりのほうから、きこえた',displayText:'左の方から聞こえた',jump:'c1_right_wrong'}
    ]},

  {type:'text',label:'c1_right_correct',character:'ナレーション',
    text:'みぎほうこうに、むかった。てさぐりで、すすむと、たおれた、いすに、てがふれた。',
    displayText:'右方向に向かった。手探りで進むと倒れた椅子に手が触れた。'},
  {type:'text',character:'ナレーション',
    text:'いすの、そばに、なにかが、こぼれている。ぬるっとした、えきたいだ。',
    displayText:'椅子のそばに何かがこぼれている。ぬるっとした液体だ。'},
  {type:'text',character:'エディマーシー',
    text:'おい、いま、なにか、さわったか。なんだそのにおい。なまぐさいぞ。',
    displayText:'おい、今何か触ったか？何だその匂い。生臭いぞ。'},
  {type:'flag',key:'found_liquid',value:true},
  {type:'jump',target:'c1_after05'},

  {type:'text',label:'c1_right_wrong',character:'ナレーション',
    text:'ひだりにむかって、あるきだした。しかし、すぐに、かべに、ぶつかった。',
    displayText:'左に向かって歩き出した。しかしすぐに壁にぶつかった。'},
  {type:'text',character:'ナレーション',
    text:'いたっ。ほうこうを、まちがえたようだ。くらやみでは、おとのほうこうを、ただしくききわけることが、じゅうようだ。',
    displayText:'痛っ。方向を間違えたようだ。暗闇では音の方向を正しく聞き分けることが重要だ。'},
  {type:'flag',key:'found_liquid',value:false},
  {type:'jump',target:'c1_after05'},

  // ===== 選択06：左から悲鳴（左右パン） =====
  {type:'text',label:'c1_after05',character:'ナレーション',
    text:'つづいて、ひだりのほうから、みじかい、さけびごえが、きこえた。',
    displayText:'続いて、左の方から短い叫び声が聞こえた。',
    pan:-1},

  {type:'text',character:'のぶん',
    text:'いたっ。なんだ、いま。あしに、なにかが。',
    displayText:'痛っ！何だ今！足に何かが…！',
    pan:-1},

  {type:'choice',
    text:'のぶんの、さけびごえは、どちらから、きこえたか。たすけにいくか。',
    displayText:'のぶんの叫び声はどちらから聞こえた？助けに行くか？',
    choices:[
      {text:'ひだりにむかって、はしる',displayText:'左に向かって走る',jump:'c1_left_run'},
      {text:'そのばで、おおごえで、よぶ',displayText:'その場で大声で呼ぶ',jump:'c1_shout_nobun'}
    ]},

  {type:'text',label:'c1_left_run',character:'ナレーション',
    text:'ひだりほうこうに、はしった。てさぐりで、すすむと、のぶんの、つりざおに、あしが、ひっかかった。',
    displayText:'左方向に走った。手探りで進むと、のぶんの釣り竿に足が引っかかった。'},
  {type:'text',character:'ナレーション',
    text:'つりざおは、おれている。そして、のぶんの、すがたは、もう、そこにはなかった。',
    displayText:'釣り竿は折れている。そしてのぶんの姿はもうそこにはなかった。'},
  {type:'flag',key:'rushed_to_nobun',value:true},
  {type:'jump',target:'c1_after06'},

  {type:'text',label:'c1_shout_nobun',character:'ナレーション',
    text:'おおごえで、のぶんを、よんだ。しかし、へんじがない。',
    displayText:'大声でのぶんを呼んだ。しかし返事がない。'},
  {type:'text',character:'ゆっきん',
    text:'おい、のぶん。へんじしろよ。ふざけてんのか。',
    displayText:'おい、のぶん！返事しろよ！ふざけてんのか！'},
  {type:'silence',duration:2000,displayText:'…………返事はない。'},
  {type:'flag',key:'rushed_to_nobun',value:false},
  {type:'jump',target:'c1_after06'},

  // ===== 選択07：のぶんを探す方法 =====
  {type:'text',label:'c1_after06',character:'ナレーション',
    text:'のぶんが、こたえない。くらやみのなかで、ふあんが、ひろがる。',
    displayText:'のぶんが答えない。暗闇の中で不安が広がる。'},

  {type:'text',character:'おちぷー',
    text:'やばいって。のぶん、どこいったんだよ。おい、まじで、こわいんだけど。',
    displayText:'ヤバいって！のぶんどこ行ったんだよ！おい、マジで怖いんだけど！'},

  {type:'choice',
    text:'のぶんを、どうやって、さがす。',
    displayText:'のぶんをどうやって探す？',
    choices:[
      {text:'ぜんいんで、いっしょに、さがす',displayText:'全員で一緒に探す',jump:'c1_search_all'},
      {text:'ふたてに、わかれて、さがす',displayText:'二手に分かれて探す',jump:'c1_search_split'},
      {text:'ひとりで、さがしにいく',displayText:'一人で探しに行く',jump:'c1_search_alone'},
      {text:'のぶんを、まつ',displayText:'のぶんを待つ',jump:'c1_search_wait'}
    ]},

  {type:'text',label:'c1_search_all',character:'ナレーション',
    text:'ぜんいんで、かたまって、みせのなかを、さがした。しかし、あるくたびに、だれかが、つまずく。',
    displayText:'全員で固まって店の中を探した。しかし歩くたびに誰かが躓く。'},
  {type:'text',character:'かとぱん',
    text:'いしゃとしていうが、くらやみで、おおぜいが、うごくのは、きけんだぞ。けがにんがでる。',
    displayText:'医者として言うが、暗闇で大勢が動くのは危険だぞ。怪我人が出る。'},
  {type:'text',character:'ナレーション',
    text:'さがしまわったが、のぶんは、みつからない。しかし、みせのおくに、みたことのない、とびらを、みつけた。',
    displayText:'探し回ったが、のぶんは見つからない。しかし店の奥に見たことのない扉を見つけた。'},
  {type:'jump',target:'c1_after07'},

  {type:'text',label:'c1_search_split',character:'ナレーション',
    text:'ふたてに、わかれることにした。',
    displayText:'二手に分かれることにした。'},
  {type:'text',character:'ゆっきん',
    text:'おれと、えでぃまーしーと、おちぷーで、みせのおくを、さがす。のこりは、いりぐちがわだ。',
    displayText:'俺とエディマーシーとおちぷーで店の奥を探す。残りは入口側だ。'},
  {type:'text',character:'おちぷー',
    text:'え、おれ、おくにいくの。いやだよ。おまえらが、いけよ。',
    displayText:'え、俺奥に行くの？嫌だよ。お前らが行けよ。'},
  {type:'text',character:'ナレーション',
    text:'わかれて、さがした。しばらくして、おくのほうから、ゆっきんのこえが、きこえた。',
    displayText:'分かれて探した。しばらくして、奥の方からゆっきんの声が聞こえた。'},
  {type:'text',character:'ゆっきん',
    text:'おい、こっちに、きてくれ。へんな、とびらが、あるぞ。',
    displayText:'おい、こっちに来てくれ！変な扉があるぞ！'},
  {type:'jump',target:'c1_after07'},

  {type:'text',label:'c1_search_alone',character:'ナレーション',
    text:'ひとりで、さがしにいくことにした。くらやみのなかを、かべづたいに、すすむ。',
    displayText:'一人で探しに行くことにした。暗闇の中を壁伝いに進む。'},
  {type:'text',character:'ナレーション',
    text:'しずけさのなかに、じぶんの、あしおとだけが、ひびく。きんちょうで、しんぞうが、はやなりする。',
    displayText:'静けさの中に自分の足音だけが響く。緊張で心臓が早鳴りする。'},
  {type:'text',character:'ナレーション',
    text:'みせのおくに、つめたいてつの、とびらを、みつけた。',
    displayText:'店の奥に冷たい鉄の扉を見つけた。'},
  {type:'jump',target:'c1_after07'},

  {type:'text',label:'c1_search_wait',character:'ナレーション',
    text:'のぶんを、まつことにした。しかし、なんぷんたっても、もどってこない。',
    displayText:'のぶんを待つことにした。しかし何分経っても戻ってこない。'},
  {type:'text',character:'ちばぶ',
    text:'ちなみに、ゆくえふめいしゃの、そうさくは、はやければ、はやいほど、はっけんりつが、あがるらしいよ。',
    displayText:'ちなみに行方不明者の捜索は早ければ早いほど発見率が上がるらしいよ。'},
  {type:'text',character:'エディマーシー',
    text:'しかたねえ、さがしにいくか。おい、おくのほうに、なんか、とびらが、あるみたいだぞ。',
    displayText:'仕方ねえ、探しに行くか。おい、奥の方に何か扉があるみたいだぞ。'},
  {type:'jump',target:'c1_after07'},

  // ===== 選択08：手紙 =====
  {type:'text',label:'c1_after07',character:'ナレーション',
    text:'とびらのまえに、いちまいの、かみが、おちていた。てさぐりで、ひろいあげる。',
    displayText:'扉の前に一枚の紙が落ちていた。手探りで拾い上げる。'},

  {type:'text',character:'よっちん',
    text:'なんだそれ。かみか。くらくて、よめないだろ。',
    displayText:'何だそれ？紙か？暗くて読めないだろ。'},

  {type:'text',character:'ちばぶ',
    text:'まって、おれの、きーほるだーに、ちいさい、らいとが、ついてる。でんちしきだから、つかえるかも。',
    displayText:'待って、俺のキーホルダーに小さいライトがついてる。電池式だから使えるかも。'},

  {type:'text',character:'ナレーション',
    text:'かすかなひかりに、てらされた、かみには、こう、かいてあった。',
    displayText:'かすかな光に照らされた紙にはこう書いてあった。'},

  {type:'choice',
    text:'てがみをよむか、よまないか。',
    displayText:'手紙を読むか？',
    choices:[
      {text:'よむ',displayText:'読む',jump:'c1_read_letter'},
      {text:'よまない',displayText:'読まない',jump:'c1_skip_letter'}
    ]},

  {type:'text',label:'c1_read_letter',character:'ナレーション',
    text:'てがみには、ぶきみな、もじが、ならんでいた。こんや、おまえたちは、ひとりずつ、きえる。にげることは、できない。',
    displayText:'手紙には不気味な文字が並んでいた。「今夜、お前たちは一人ずつ消える。逃げることはできない」'},
  {type:'silence',duration:2000,displayText:''},
  {type:'text',character:'おちぷー',
    text:'はっ。なんだそれ。うそだろ。いたずらだろ。そうだよな。な。',
    displayText:'はっ！何だそれ！嘘だろ！いたずらだろ！そうだよな！な！？'},
  {type:'text',character:'ゆっきん',
    text:'おもしれえ。かけようぜ。これが、ほんものか、にせものか。',
    displayText:'面白え。賭けようぜ。これが本物か偽物か。'},
  {type:'text',character:'デブコーン',
    text:'ふざけんな。しゃれに、なんねえよ。のぶんが、きえたのは、ほんとうなんだぞ。',
    displayText:'ふざけんな。シャレになんねえよ。のぶんが消えたのは本当なんだぞ。'},
  {type:'flag',key:'read_letter',value:true},
  {type:'jump',target:'c1_after08'},

  {type:'text',label:'c1_skip_letter',character:'ナレーション',
    text:'いまは、よまないことにした。ぽけっとに、しまった。',
    displayText:'今は読まないことにした。ポケットにしまった。'},
  {type:'flag',key:'read_letter',value:false},
  {type:'jump',target:'c1_after08'},

  // ===== 選択09：背後から足音（カウントダウン） =====
  {type:'text',label:'c1_after08',character:'ナレーション',
    text:'そのとき。うしろから、ひたひた、ひたひた、と、あしおとが、きこえた。',
    displayText:'その時。後ろからヒタヒタ、ヒタヒタ、と足音が聞こえた。'},

  {type:'silence',duration:1500,displayText:'……ヒタ……ヒタ……'},

  {type:'text',character:'ナレーション',
    text:'あしおとが、すこしずつ、ちかづいてくる。はやく、はんだんしなければ。',
    displayText:'足音が少しずつ近づいてくる。早く判断しなければ。'},

  {type:'choice',
    text:'ごびょういない、に、はんだんしろ。',
    displayText:'5秒以内に判断しろ！',
    countdown:5,
    timeoutJump:'c1_timeout_gameover',
    choices:[
      {text:'ふりむいて、つかむ',displayText:'振り向いて掴む',jump:'c1_grab'},
      {text:'しゃがんで、よける',displayText:'しゃがんで避ける',jump:'c1_dodge'},
      {text:'こえを、かける',displayText:'声をかける',jump:'c1_call_out_go'},
      {text:'はしって、にげる',displayText:'走って逃げる',jump:'c1_run_away'}
    ]},

  // 掴む→エディマーシーだった
  {type:'text',label:'c1_grab',character:'ナレーション',
    text:'ふりむきざまに、あいての、うでを、つかんだ。',
    displayText:'振り向きざまに相手の腕を掴んだ。'},
  {type:'text',character:'エディマーシー',
    text:'いてえ。おれだ、おれ。えでぃまーしーだ。おどかすんじゃねえよ。',
    displayText:'痛え！俺だ俺！エディマーシーだ！驚かすんじゃねえよ！'},
  {type:'text',character:'ナレーション',
    text:'えでぃまーしーだった。あぶないところだった。',
    displayText:'エディマーシーだった。危ないところだった。'},
  {type:'jump',target:'c1_after09'},

  // しゃがむ→何かが頭上を通過
  {type:'text',label:'c1_dodge',character:'ナレーション',
    text:'とっさに、しゃがんだ。あたまのうえを、なにかが、とおりすぎた。かぜを、かんじた。',
    displayText:'とっさにしゃがんだ。頭の上を何かが通り過ぎた。風を感じた。'},
  {type:'text',character:'ナレーション',
    text:'いったい、いまのは、なんだったのか。だれかが、なにかを、ふりまわしていたのか。',
    displayText:'一体今のは何だったのか。誰かが何かを振り回していたのか？'},
  {type:'text',character:'エディマーシー',
    text:'おう。おまえか。おれは、ぼうきりれを、もって、あるいてたんだ。くらいから、ぶきがわりに。すまん。',
    displayText:'おう、お前か。俺は棒切れを持って歩いてたんだ。暗いから武器がわりに。すまん。'},
  {type:'jump',target:'c1_after09'},

  // 声をかける→ゲームオーバー
  {type:'text',label:'c1_call_out_go',character:'ナレーション',
    text:'こえを、かけた。だれだ、と。',
    displayText:'声をかけた。「誰だ」と。'},
  {type:'silence',duration:2000,displayText:'……返事はない。'},
  {type:'text',character:'ナレーション',
    text:'へんじはなく、つぎのしゅんかん、つよいちからで、うしろから、おさえつけられた。いしきが、とおのいていく。',
    displayText:'返事はなく、次の瞬間、強い力で後ろから押さえつけられた。意識が遠のいていく。'},
  {type:'gameover'},

  // 逃げる→転ぶがセーフ
  {type:'text',label:'c1_run_away',character:'ナレーション',
    text:'はしって、にげだした。しかし、くらやみで、いすに、あしを、ぶつけて、ころんだ。',
    displayText:'走って逃げ出した。しかし暗闇で椅子に足をぶつけて転んだ。'},
  {type:'text',character:'エディマーシー',
    text:'おい、だいじょうぶか。おれだよ、えでぃまーしー。おどかして、わるかった。',
    displayText:'おい大丈夫か。俺だよ、エディマーシー。驚かして悪かった。'},
  {type:'text',character:'かとぱん',
    text:'どれ、みせてみろ。ああ、すこし、すりむいたな。いしゃとして、しょちしてやる。つばでも、つけとけ。',
    displayText:'どれ、見せてみろ。ああ少し擦りむいたな。医者として処置してやる。唾でもつけとけ。'},
  {type:'jump',target:'c1_after09'},

  // タイムアウト→ゲームオーバー
  {type:'text',label:'c1_timeout_gameover',character:'ナレーション',
    text:'はんだんが、おそすぎた。うしろから、つよいちからで、くびを、つかまれた。いしきが、とおのく。',
    displayText:'判断が遅すぎた。後ろから強い力で首を掴まれた。意識が遠のく。'},
  {type:'gameover'},

  // ===== 選択10：血のような液体 =====
  {type:'text',label:'c1_after09',character:'ナレーション',
    text:'さわぎのなか、ゆかに、なにかが、こぼれていることに、きづいた。ぬるぬるとした、えきたい。そして、てつのような、においがする。',
    displayText:'騒ぎの中、床に何かがこぼれていることに気づいた。ぬるぬるとした液体。そして鉄のような匂いがする。'},

  {type:'text',character:'ナレーション',
    text:'これは、もしかして、ち、ではないのか。',
    displayText:'これはもしかして…血ではないのか？'},

  {type:'choice',
    text:'このえきたいについて、みんなに、ほうこくするか。',
    displayText:'この液体についてみんなに報告するか？',
    choices:[
      {text:'みんなに、ほうこくする',displayText:'みんなに報告する',jump:'c1_report_blood'},
      {text:'かくしておく',displayText:'隠しておく',jump:'c1_hide_blood'}
    ]},

  {type:'text',label:'c1_report_blood',character:'ナレーション',
    text:'みんなに、つたえた。ゆかに、ちのような、えきたいが、あると。',
    displayText:'みんなに伝えた。床に血のような液体があると。'},
  {type:'text',character:'おちぷー',
    text:'ち。ちって、いったか、いま。むりむりむり。おれ、もう、かえる。かえらせてくれ。',
    displayText:'血！？血って言ったか今！無理無理無理！俺もう帰る！帰らせてくれ！'},
  {type:'text',character:'かとぱん',
    text:'まて。ほんとうに、ちかどうか、おれが、しらべてやる。うん。これは。',
    displayText:'待て。本当に血かどうか俺が調べてやる。うん…これは…'},
  {type:'text',character:'かとぱん',
    text:'わからん。くらくて。',
    displayText:'わからん。暗くて。'},
  {type:'text',character:'ゆっきん',
    text:'やぶいしゃかよ。',
    displayText:'やぶ医者かよ。'},
  {type:'flag',key:'reported_blood',value:true},
  {type:'jump',target:'c1_after10'},

  {type:'text',label:'c1_hide_blood',character:'ナレーション',
    text:'いまは、だれにもいわないことにした。よけいなぱにっくを、おこしたくない。',
    displayText:'今は誰にも言わないことにした。余計なパニックを起こしたくない。'},
  {type:'flag',key:'reported_blood',value:false},
  {type:'jump',target:'c1_after10'},

  // ===== 選択11：左右同時の声（左右パン） =====
  {type:'text',label:'c1_after10',character:'ナレーション',
    text:'そのとき、ふたつのおとが、どうじに、きこえた。',
    displayText:'その時、二つの音が同時に聞こえた。'},

  {type:'text',character:'ナレーション',
    text:'ひだりからは、のぶんのこえのような、うめきごえ。',
    displayText:'左からは、のぶんの声のような呻き声。',
    pan:-1},

  {type:'text',character:'ナレーション',
    text:'みぎからは、なにかを、ひきずるような、おと。',
    displayText:'右からは、何かを引きずるような音。',
    pan:1},

  {type:'choice',
    text:'ひだりと、みぎ、どちらに、むかう。',
    displayText:'左と右、どちらに向かう？',
    choices:[
      {text:'ひだりの、うめきごえに、むかう',displayText:'左の呻き声に向かう',jump:'c1_go_left'},
      {text:'みぎの、ひきずるおとに、むかう',displayText:'右の引きずる音に向かう',jump:'c1_go_right'}
    ]},

  {type:'text',label:'c1_go_left',character:'ナレーション',
    text:'ひだりに、むかった。しかし、そこには、だれもいなかった。うめきごえは、やんでいた。',
    displayText:'左に向かった。しかしそこには誰もいなかった。呻き声はやんでいた。'},
  {type:'text',character:'ナレーション',
    text:'さっかくだったのか。それとも、おびきよせられたのか。',
    displayText:'錯覚だったのか。それともおびき寄せられたのか。'},
  {type:'jump',target:'c1_after11'},

  {type:'text',label:'c1_go_right',character:'ナレーション',
    text:'みぎに、むかった。ひきずるおとのさきに、のぶんの、つりどうぐいっしきが、ちらばっていた。',
    displayText:'右に向かった。引きずる音の先に、のぶんの釣り道具一式が散らばっていた。'},
  {type:'text',character:'ナレーション',
    text:'つりざおは、へしおられ、りーるは、ぶんかいされていた。あきらかに、だれかが、いとてきに、こわしたものだ。',
    displayText:'釣り竿はへし折られ、リールは分解されていた。明らかに誰かが意図的に壊したものだ。'},
  {type:'flag',key:'found_gear',value:true},
  {type:'jump',target:'c1_after11'},

  // ===== 選択12：章末の決断 =====
  {type:'text',label:'c1_after11',character:'ナレーション',
    text:'のぶんは、かんぜんに、きえた。なんどよんでも、へんじはない。',
    displayText:'のぶんは完全に消えた。何度呼んでも返事はない。'},

  {type:'silence',duration:2000,displayText:''},

  {type:'text',character:'よっちん',
    text:'おちつこう、みんな。まず、のこった、しちにんで、だんけつしよう。ばらばらに、なったら、あぶない。',
    displayText:'落ち着こう、みんな。まず残った七人で団結しよう。バラバラになったら危ない。'},

  {type:'text',character:'おちぷー',
    text:'だんけつって、いったって。このなかに、はんにんが、いるかもしれないんだぞ。',
    displayText:'団結っていったって…この中に犯人がいるかもしれないんだぞ。'},

  {type:'choice',
    text:'なかまを、しんじるか。',
    displayText:'仲間を信じるか？',
    choices:[
      {text:'なかまをしんじて、だんけつする',displayText:'仲間を信じて団結する',jump:'c1_trust'},
      {text:'だれも、しんじない',displayText:'誰も信じない',jump:'c1_distrust'}
    ]},

  {type:'text',label:'c1_trust',character:'ナレーション',
    text:'なかまを、しんじることにした。いまは、だんけつするしかない。',
    displayText:'仲間を信じることにした。今は団結するしかない。'},
  {type:'text',character:'エディマーシー',
    text:'そうだ。おれたちは、ようちくなじみだ。しんじあおう。',
    displayText:'そうだ。俺たちは幼馴染だ。信じ合おう。'},
  {type:'flag',key:'trust_allies',value:true},
  {type:'jump',target:'c1_ending'},

  {type:'text',label:'c1_distrust',character:'ナレーション',
    text:'だれも、しんようできない。このなかに、のぶんを、けしたやつが、いるかもしれないのだ。',
    displayText:'誰も信用できない。この中にのぶんを消した奴がいるかもしれないのだ。'},
  {type:'text',character:'ちばぶ',
    text:'ちなみに、さつじんじけんの、ろくじゅっぱーせんとは、かおみしりの、はんこうらしいよ。',
    displayText:'ちなみに殺人事件の60パーセントは顔見知りの犯行らしいよ。'},
  {type:'flag',key:'trust_allies',value:false},
  {type:'jump',target:'c1_ending'},

  // ===== エンディング =====
  {type:'text',label:'c1_ending',character:'ナレーション',
    text:'ゆかには、なまぐさい、えきたいの、あとが、のこっている。',
    displayText:'床には生臭い液体の跡が残っている。'},

  {type:'text',character:'ナレーション',
    text:'のぶんの、おられた、つりざお。てがみの、きょうはくぶん。そして、ぜんいんの、すまほが、しんでいるという、いじょうじたい。',
    displayText:'のぶんの折られた釣り竿。手紙の脅迫文。そして全員のスマホが死んでいるという異常事態。'},

  {type:'text',character:'ナレーション',
    text:'これは、ぐうぜんではない。だれかが、しくんでいる。',
    displayText:'これは偶然ではない。誰かが仕組んでいる。'},

  {type:'text',character:'ナレーション',
    text:'はちにんだった、なかまは、しちにんになった。',
    displayText:'八人だった仲間は七人になった。'},

  {type:'silence',duration:2000,displayText:''},

  {type:'text',character:'ナレーション',
    text:'やみは、まだ、はじまったばかりだ。',
    displayText:'闇はまだ始まったばかりだ。'},

  {type:'silence',duration:1500,displayText:''},

  {type:'text',character:'ナレーション',
    text:'だいいっしょう、くりあ。',
    displayText:'第一章クリア'},

  {type:'end'}
];
