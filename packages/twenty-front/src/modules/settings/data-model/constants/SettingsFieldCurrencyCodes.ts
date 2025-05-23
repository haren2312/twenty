import { CurrencyCode } from '@/object-record/record-field/types/CurrencyCode';
import {
  IconCoins,
  IconComponent,
  IconCurrencyAfghani,
  IconCurrencyBahraini,
  IconCurrencyBaht,
  IconCurrencyForint,
  IconCurrencyDinar,
  IconCurrencyDirham,
  IconCurrencyDollar,
  IconCurrencyDollarAustralian,
  IconCurrencyDollarBrunei,
  IconCurrencyDollarCanadian,
  IconCurrencyDollarGuyanese,
  IconCurrencyDollarSingapore,
  IconCurrencyDong,
  IconCurrencyDram,
  IconCurrencyEuro,
  IconCurrencyFlorin,
  IconCurrencyFrank,
  IconCurrencyGuarani,
  IconCurrencyHryvnia,
  IconCurrencyIranianRial,
  IconCurrencyKip,
  IconCurrencyKroneCzech,
  IconCurrencyKroneDanish,
  IconCurrencyKroneSwedish,
  IconCurrencyLari,
  IconCurrencyLeu,
  IconCurrencyLira,
  IconCurrencyLyd,
  IconCurrencyManat,
  IconCurrencyNaira,
  IconCurrencyPaanga,
  IconCurrencyPeso,
  IconCurrencyPound,
  IconCurrencyQuetzal,
  IconCurrencyReal,
  IconCurrencyRenminbi,
  IconCurrencyRiyal,
  IconCurrencyRubel,
  IconCurrencyRufiyaa,
  IconCurrencyRupee,
  IconCurrencyRupeeNepalese,
  IconCurrencyTaka,
  IconCurrencyTenge,
  IconCurrencyTugrik,
  IconCurrencySom,
  IconCurrencyShekel,
  IconCurrencyWon,
  IconCurrencyYen,
  IconCurrencyYuan,
  IconCurrencyZloty,
} from 'twenty-ui/display';

export const SETTINGS_FIELD_CURRENCY_CODES: Record<
  CurrencyCode,
  { label: string; Icon: IconComponent }
> = {
  AED: { label: 'UAE dirham', Icon: IconCurrencyDirham },
  AFN: { label: 'Afghan afghani', Icon: IconCurrencyAfghani },
  ALL: { label: 'Albanian lek', Icon: IconCurrencyLeu },
  AMD: { label: 'Armenian dram', Icon: IconCurrencyDram },
  ANG: { label: 'Netherlands Antillean guilder', Icon: IconCurrencyFlorin },
  AOA: { label: 'Angolan kwanza', Icon: IconCoins },
  ARS: { label: 'Argentine peso', Icon: IconCoins },
  AUD: { label: 'Australian dollar', Icon: IconCurrencyDollarAustralian },
  AWG: { label: 'Aruban florin', Icon: IconCurrencyFlorin },
  AZN: { label: 'Azerbaijani manat', Icon: IconCurrencyManat },
  BAM: { label: 'Bosnia and Herzegovina mark', Icon: IconCoins },
  BBD: { label: 'Barbados dollar', Icon: IconCurrencyDollar },
  BDT: { label: 'Bangladeshi taka', Icon: IconCurrencyTaka },
  BGN: { label: 'Bulgarian lev', Icon: IconCoins },
  BHD: { label: 'Bahraini dinar', Icon: IconCurrencyBahraini },
  BIF: { label: 'Burundian franc', Icon: IconCoins },
  BMD: { label: 'Bermudian dollar', Icon: IconCurrencyDollar },
  BND: { label: 'Brunei dollar', Icon: IconCurrencyDollarBrunei },
  BOB: { label: 'Boliviano', Icon: IconCoins },
  BRL: { label: 'Brazilian real', Icon: IconCurrencyReal },
  BSD: { label: 'Bahamian dollar', Icon: IconCurrencyDollar },
  BTN: { label: 'Bhutanese ngultrum', Icon: IconCurrencyDollar },
  BWP: { label: 'Botswana pula', Icon: IconCoins },
  BYN: { label: 'Belarusian ruble', Icon: IconCoins },
  BZD: { label: 'Belize dollar', Icon: IconCurrencyDollar },
  CAD: { label: 'Canadian dollar', Icon: IconCurrencyDollarCanadian },
  CDF: { label: 'Congolese franc', Icon: IconCoins },
  CHF: { label: 'Swiss franc', Icon: IconCurrencyFrank },
  CLP: { label: 'Chilean peso', Icon: IconCoins },
  CNY: { label: 'Chinese yuan', Icon: IconCurrencyYuan },
  COP: { label: 'Colombian peso', Icon: IconCoins },
  CRC: { label: 'Costa Rican colon', Icon: IconCoins },
  CUP: { label: 'Cuban peso', Icon: IconCoins },
  CVE: { label: 'Cape Verdean escudo', Icon: IconCoins },
  CZK: { label: 'Czech koruna', Icon: IconCurrencyKroneCzech },
  DJF: { label: 'Djiboutian franc', Icon: IconCoins },
  DKK: { label: 'Danish krone', Icon: IconCurrencyKroneDanish },
  DOP: { label: 'Dominican peso', Icon: IconCoins },
  DZD: { label: 'Algerian Dinar', Icon: IconCoins },
  EGP: { label: 'Egyptian pound', Icon: IconCoins },
  ERN: { label: 'Eritrean nakfa', Icon: IconCoins },
  ETB: { label: 'Ethiopian birr', Icon: IconCoins },
  EUR: { label: 'Euro', Icon: IconCurrencyEuro },
  FJD: { label: 'Fiji dollar', Icon: IconCurrencyDollar },
  FKP: { label: 'Falkland Islands pound', Icon: IconCoins },
  GBP: { label: 'British pound', Icon: IconCurrencyPound },
  GEL: { label: 'Georgian lari', Icon: IconCurrencyLari },
  GHS: { label: 'Ghanaian cedi', Icon: IconCoins },
  GIP: { label: 'Gibraltar pound', Icon: IconCoins },
  GMD: { label: 'Gambian dalasi', Icon: IconCoins },
  GNF: { label: 'Guinean franc', Icon: IconCoins },
  GTQ: { label: 'Guatemalan quetzal', Icon: IconCurrencyQuetzal },
  GYD: { label: 'Guyanese dollar', Icon: IconCurrencyDollarGuyanese },
  HKD: { label: 'Hong Kong dollar', Icon: IconCurrencyRenminbi },
  HNL: { label: 'Honduran lempira', Icon: IconCurrencyLeu },
  HTG: { label: 'Haitian gourde', Icon: IconCoins },
  HUF: { label: 'Hungarian forint', Icon: IconCurrencyForint },
  IDR: { label: 'Indonesian rupiah', Icon: IconCoins },
  ILS: { label: 'Israeli shekel', Icon: IconCurrencyShekel },
  INR: { label: 'Indian rupee', Icon: IconCurrencyRupee },
  IQD: { label: 'Iraqi dinar', Icon: IconCoins },
  IRR: { label: 'Iranian rial', Icon: IconCurrencyIranianRial },
  ISK: { label: 'Icelandic króna', Icon: IconCoins },
  JMD: { label: 'Jamaican dollar', Icon: IconCurrencyDollar },
  JOD: { label: 'Jordanian dinar', Icon: IconCoins },
  JPY: { label: 'Japanese yen', Icon: IconCurrencyYen },
  KES: { label: 'Kenyan shilling', Icon: IconCoins },
  KGS: { label: 'Kyrgyzstani som', Icon: IconCurrencySom },
  KHR: { label: 'Cambodian riel', Icon: IconCoins },
  KMF: { label: 'Comoro franc', Icon: IconCoins },
  KPW: { label: 'North Korean won', Icon: IconCurrencyWon },
  KRW: { label: 'South Korean won', Icon: IconCurrencyWon },
  KWD: { label: 'Kuwaiti dinar', Icon: IconCurrencyDinar },
  KYD: { label: 'Cayman Islands dollar', Icon: IconCurrencyDollar },
  KZT: { label: 'Kazakhstani tenge', Icon: IconCurrencyTenge },
  LAK: { label: 'Lao kip', Icon: IconCurrencyKip },
  LBP: { label: 'Lebanese pound', Icon: IconCoins },
  LKR: { label: 'Sri Lankan rupee', Icon: IconCoins },
  LRD: { label: 'Liberian dollar', Icon: IconCurrencyDollar },
  LSL: { label: 'Lesotho loti', Icon: IconCurrencyLeu },
  LYD: { label: 'Libyan dinar', Icon: IconCurrencyLyd },
  MAD: { label: 'Moroccan dirham', Icon: IconCurrencyDirham },
  MDL: { label: 'Moldovan leu', Icon: IconCurrencyLeu },
  MGA: { label: 'Malagasy ariary', Icon: IconCoins },
  MKD: { label: 'Macedonian denar', Icon: IconCoins },
  MMK: { label: 'Myanmar kyat', Icon: IconCoins },
  MNT: { label: 'Mongolian tögrög', Icon: IconCurrencyTugrik },
  MOP: { label: 'Macanese pataca', Icon: IconCurrencyRenminbi },
  MRU: { label: 'Mauritanian ouguiya', Icon: IconCoins },
  MUR: { label: 'Mauritian rupee', Icon: IconCoins },
  MVR: { label: 'Maldivian rufiyaa', Icon: IconCurrencyRufiyaa },
  MWK: { label: 'Malawian kwacha', Icon: IconCoins },
  MXN: { label: 'Mexican peso', Icon: IconCoins },
  MYR: { label: 'Malaysian ringgit', Icon: IconCoins },
  MZN: { label: 'Mozambican metical', Icon: IconCoins },
  NAD: { label: 'Namibian dollar', Icon: IconCurrencyDollar },
  NGN: { label: 'Nigerian naira', Icon: IconCurrencyNaira },
  NIO: { label: 'Nicaraguan córdoba', Icon: IconCoins },
  NOK: { label: 'Norwegian krone', Icon: IconCurrencyKroneSwedish },
  NPR: { label: 'Nepalese rupee', Icon: IconCurrencyRupeeNepalese },
  NZD: { label: 'New Zealand dollar', Icon: IconCurrencyDollar },
  OMR: { label: 'Omani rial', Icon: IconCoins },
  PAB: { label: 'Panamanian balboa', Icon: IconCoins },
  PEN: { label: 'Peruvian sol', Icon: IconCoins },
  PGK: { label: 'Papua New Guinean kina', Icon: IconCoins },
  PHP: { label: 'Philippine peso', Icon: IconCurrencyPeso },
  PKR: { label: 'Pakistani rupee', Icon: IconCoins },
  PLN: { label: 'Polish złoty', Icon: IconCurrencyZloty },
  PYG: { label: 'Paraguayan guaraní', Icon: IconCurrencyGuarani },
  QAR: { label: 'Qatari riyal', Icon: IconCurrencyRiyal },
  RON: { label: 'Romanian leu', Icon: IconCurrencyLeu },
  RSD: { label: 'Serbian dinar', Icon: IconCoins },
  RUB: { label: 'Russian ruble', Icon: IconCurrencyRubel },
  RWF: { label: 'Rwandan franc', Icon: IconCoins },
  SAR: { label: 'Saudi riyal', Icon: IconCoins },
  SBD: { label: 'Solomon Islands dollar', Icon: IconCurrencyDollar },
  SCR: { label: 'Seychelles rupee', Icon: IconCoins },
  SDG: { label: 'Sudanese pound', Icon: IconCoins },
  SEK: { label: 'Swedish krona', Icon: IconCurrencyKroneSwedish },
  SGD: { label: 'Singapore dollar', Icon: IconCurrencyDollarSingapore },
  SHP: { label: 'Saint Helena pound', Icon: IconCoins },
  SLE: { label: 'Sierra Leonean leone', Icon: IconCoins },
  SOS: { label: 'Somalian shilling', Icon: IconCoins },
  SRD: { label: 'Surinamese dollar', Icon: IconCurrencyDollar },
  SSP: { label: 'South Sudanese pound', Icon: IconCoins },
  STN: { label: 'São Tomé and Príncipe dobra', Icon: IconCoins },
  SVC: { label: 'Salvadoran colón', Icon: IconCoins },
  SYP: { label: 'Syrian pound', Icon: IconCoins },
  SZL: { label: 'Swazi lilangeni', Icon: IconCurrencyLeu },
  THB: { label: 'Thai Baht', Icon: IconCurrencyBaht },
  TJS: { label: 'Tajikistani somoni', Icon: IconCoins },
  TMT: { label: 'Turkmenistan manat', Icon: IconCurrencyManat },
  TND: { label: 'Tunisian dinar', Icon: IconCoins },
  TOP: { label: 'Tongan paʻanga', Icon: IconCurrencyPaanga },
  TRY: { label: 'Turkish lira', Icon: IconCurrencyLira },
  TTD: { label: 'Trinidad and Tobago dollar', Icon: IconCurrencyDollar },
  TWD: { label: 'Taiwanese dollar', Icon: IconCurrencyRenminbi },
  TZS: { label: 'Tanzanian shilling', Icon: IconCoins },
  UAH: { label: 'Ukrainian hryvnia', Icon: IconCurrencyHryvnia },
  UGX: { label: 'Ugandan shilling', Icon: IconCoins },
  USD: { label: 'United States dollar', Icon: IconCurrencyDollar },
  UYU: { label: 'Uruguayan peso', Icon: IconCoins },
  UZS: { label: 'Uzbekistani sum', Icon: IconCoins },
  VES: { label: 'Venezuelan bolívar', Icon: IconCoins },
  VND: { label: 'Vietnamese đồng', Icon: IconCurrencyDong },
  VUV: { label: 'Vanuatu vatu', Icon: IconCoins },
  WST: { label: 'Samoan tala', Icon: IconCoins },
  XOF: { label: 'West African CFA franc', Icon: IconCoins },
  XCD: { label: 'East Caribbean dollar', Icon: IconCurrencyDollar },
  YER: { label: 'Yemeni rial', Icon: IconCoins },
  ZAR: { label: 'South African rand', Icon: IconCoins },
  ZMW: { label: 'Zambian kwacha', Icon: IconCoins },
  ZWG: { label: 'Zimbabwe Gold', Icon: IconCoins },
};
