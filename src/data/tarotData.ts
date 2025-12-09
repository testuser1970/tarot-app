export interface TarotCard {
  id: number;
  name: string;
  nameJa: string;
  image: string;
  meaningUp: string;
  meaningRev: string;
  description: string;
}

export const tarotData: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    nameJa: "愚者",
    image: "/assets/cards/0.png",
    meaningUp: "始まり、自由、純粋、冒険",
    meaningRev: "軽率、わがまま、落ちこぼれ",
    description: "新たな旅立ちを意味するカード。常識にとらわれない自由な心で、未知の世界へ飛び込む勇気を示しています。"
  },
  {
    id: 1,
    name: "The Magician",
    nameJa: "魔術師",
    image: "/assets/cards/1.png",
    meaningUp: "創造、起源、可能性、チャンス",
    meaningRev: "混迷、スランプ、裏切り",
    description: "物事を開始するための準備が整っていることを表します。あなたの持っている才能や技術を発揮する時が来ました。"
  },
  {
    id: 2,
    name: "The High Priestess",
    nameJa: "女教皇",
    image: "/assets/cards/2.png",
    meaningUp: "知性、神秘、英知、静寂",
    meaningRev: "神経質、悲観的、無気力",
    description: "直感や洞察力が高まっている状態です。静かに自分の内面と向き合うことで、答えが見つかるでしょう。"
  },
  {
    id: 3,
    name: "The Empress",
    nameJa: "女帝",
    image: "/assets/cards/3.png",
    meaningUp: "豊穣、母性、繁栄、情熱",
    meaningRev: "過保護、浪費、情緒不安定",
    description: "物質的な豊かさと精神的な満たされを表します。愛と美、そして創造性を象徴するカードです。"
  },
  {
    id: 4,
    name: "The Emperor",
    nameJa: "皇帝",
    image: "/assets/cards/4.png",
    meaningUp: "支配、安定、責任、父性",
    meaningRev: "横暴、未熟、意志薄弱",
    description: "社会的な成功や地位、リーダーシップを表します。強い意志と行動力で目標を達成することを暗示しています。"
  },
  {
    id: 5,
    name: "The Hierophant",
    nameJa: "法王",
    image: "/assets/cards/5.png",
    meaningUp: "慈悲、連帯、協調性、信頼",
    meaningRev: "束縛、躊躇、不信感",
    description: "精神的な指導者や道徳的な教えを表します。伝統やルールを重んじ、周囲との調和を大切にすることを示唆しています。"
  },
  {
    id: 6,
    name: "The Lovers",
    nameJa: "恋人",
    image: "/assets/cards/6.png",
    meaningUp: "愛、調和、選択、情熱",
    meaningRev: "誘惑、不道徳、失恋",
    description: "深い絆やパートナーシップ、あるいは重要な決断を迫られている状況を表します。"
  },
  {
    id: 7,
    name: "The Chariot",
    nameJa: "戦車",
    image: "/assets/cards/7.png",
    meaningUp: "勝利、征服、行動力、前進",
    meaningRev: "暴走、挫折、好戦的",
    description: "困難を乗り越えて勝利を掴むことを表します。強い意志と行動力で突き進むべき時です。"
  },
  {
    id: 8,
    name: "Strength",
    nameJa: "力",
    image: "/assets/cards/8.png",
    meaningUp: "力、勇気、寛大、名誉",
    meaningRev: "甘え、弱さ、人任せ",
    description: "物理的な力ではなく、精神的な強さや忍耐力を表します。困難な状況でも冷静に対処することで克服できます。"
  },
  {
    id: 9,
    name: "The Hermit",
    nameJa: "隠者",
    image: "/assets/cards/9.png",
    meaningUp: "深慮、探求、孤独、悟り",
    meaningRev: "閉鎖的、陰湿、邪推",
    description: "内面を見つめ直し、真理を探求する時期を表します。静かな環境で自分自身と向き合うことが大切です。"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameJa: "運命の輪",
    image: "/assets/cards/10.png",
    meaningUp: "転換点、幸運、到来、チャンス",
    meaningRev: "悪化、不運、すれ違い",
    description: "運命の転換期やチャンスの到来を表します。流れに身を任せることで、良い方向へ進むことができるでしょう。"
  },
  {
    id: 11,
    name: "Justice",
    nameJa: "正義",
    image: "/assets/cards/11.png",
    meaningUp: "公正、均衡、誠意、善行",
    meaningRev: "不正、偏見、不均衡",
    description: "公平な判断や正義が下されることを表します。冷静かつ客観的な視点で物事を判断することが求められます。"
  },
  {
    id: 12,
    name: "The Hanged Man",
    nameJa: "吊るされた男",
    image: "/assets/cards/12.png",
    meaningUp: "修行、忍耐、奉仕、努力",
    meaningRev: "徒労、痩せ我慢、自暴自棄",
    description: "試練や忍耐の時期を表しますが、それは成長のための必要なプロセスです。視点を変えることで新たな発見があるかもしれません。"
  },
  {
    id: 13,
    name: "Death",
    nameJa: "死神",
    image: "/assets/cards/13.png",
    meaningUp: "終末、破滅、離散、清算",
    meaningRev: "再起、起死回生、回復",
    description: "物事の終わりと新たな始まりを表します。過去を断ち切り、新しいステージへ進むための変化を受け入れましょう。"
  },
  {
    id: 14,
    name: "Temperance",
    nameJa: "節制",
    image: "/assets/cards/14.png",
    meaningUp: "調和、自制、節度、献身",
    meaningRev: "浪費、消耗、生活の乱れ",
    description: "バランスや調和が取れている状態を表します。極端な行動を避け、穏やかで節度ある態度を保つことが大切です。"
  },
  {
    id: 15,
    name: "The Devil",
    nameJa: "悪魔",
    image: "/assets/cards/15.png",
    meaningUp: "裏切り、拘束、堕落、嫉妬",
    meaningRev: "回復、覚醒、新たな出会い",
    description: "誘惑や欲望に囚われている状態を表します。自分自身を縛り付けているものから解放される必要があります。"
  },
  {
    id: 16,
    name: "The Tower",
    nameJa: "塔",
    image: "/assets/cards/16.png",
    meaningUp: "崩壊、災害、悲劇、破産",
    meaningRev: "緊迫、誤解、不幸",
    description: "予期せぬトラブルや急激な変化を表します。これまでの価値観が崩れるような出来事が起こるかもしれませんが、それは再生のための破壊です。"
  },
  {
    id: 17,
    name: "The Star",
    nameJa: "星",
    image: "/assets/cards/17.png",
    meaningUp: "希望、ひらめき、願い、憧れ",
    meaningRev: "失望、無気力、高望み",
    description: "希望やインスピレーションに満ちた状態を表します。夢や目標に向かって進むことで、明るい未来が待っているでしょう。"
  },
  {
    id: 18,
    name: "The Moon",
    nameJa: "月",
    image: "/assets/cards/18.png",
    meaningUp: "不安、曖昧、混沌、迷い",
    meaningRev: "回復、好転、未来予知",
    description: "先が見えない不安や迷いを表します。直感を信じ、慎重に行動することで、霧が晴れるように解決策が見えてくるでしょう。"
  },
  {
    id: 19,
    name: "The Sun",
    nameJa: "太陽",
    image: "/assets/cards/19.png",
    meaningUp: "成功、誕生、祝福、約束",
    meaningRev: "不調、落胆、衰退",
    description: "成功や幸福、エネルギーに満ちた状態を表します。あなたの努力が報われ、輝かしい成果を手にすることができるでしょう。"
  },
  {
    id: 20,
    name: "Judgement",
    nameJa: "審判",
    image: "/assets/cards/20.png",
    meaningUp: "復活、結果、改善、覚醒",
    meaningRev: "悔恨、行き詰まり、悪い知らせ",
    description: "過去の行いが評価される時、あるいは再起のチャンスを表します。過去を振り返り、新たな決意を固めることで、道が開けるでしょう。"
  },
  {
    id: 21,
    name: "The World",
    nameJa: "世界",
    image: "/assets/cards/21.png",
    meaningUp: "完成、完全、達成、幸福",
    meaningRev: "未完成、臨界点、調和の崩壊",
    description: "物事の完成や目標の達成を表します。一つのサイクルが終わり、満ち足りた幸福感に包まれるでしょう。"
  }
];

export const getRandomCard = (): TarotCard => {
  const randomIndex = Math.floor(Math.random() * tarotData.length);
  return tarotData[randomIndex];
};
