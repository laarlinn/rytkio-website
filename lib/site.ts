export const site = {
  name: "Rytkiön Riistavaja",
  legalName: "Osuuskunta Rytkiön Riistavaja",
  url: "https://www.rytkio.fi",
  description:
    "Tuoremehuasema ja lihankäsittelytilat Multialla. Tila on hyväksytty elintarvikehuoneistoksi ja tarjoamme asiakkaillemme hygieenisiä ja laadukkaita palveluja.",
  address: {
    street: "Talaslahdentie 200",
    postalCode: "42600",
    city: "Multia",
  },
  geo: { lat: 62.38869872387649, lon: 24.720096588134766 },
  email: "rytkioriistavaja@gmail.com",
  phone: {
    osuuskunta: { display: "041 315 4236", tel: "+358413154236" },
    tuoremehuasema: {
      display: "044 238 7450",
      tel: "+358442387450",
      note: "arkisin klo 18–20",
    },
  },
  oivaReportUrl: "https://oivahymy.fi/api/raportti/215296",
  season: {
    banner: "Mehustus loppuu 20.9.",
    booking: "Kiitokset asiakkaille!",
  },
};

export const inquiries = [
  { name: "Arto Linna", phone: { display: "040 867 4310", tel: "+358408674310" } },
  { name: "Otto Linna", phone: { display: "044 205 6665", tel: "+358442056665" } },
];

export const priceList = [
  { item: "Omenamehu, pastöroitu", detail: "", price: "1,35 €/kilo" },
  { item: "Omenamehu, pastöroimaton", detail: "", price: "1,10 €/kilo" },
  { item: "Hanapakkaus, 2 litraa", detail: "", price: "1,25 €/kpl" },
  { item: "Hanapakkaus, 3 litraa", detail: "", price: "1,30 €/kpl" },
  { item: "Hanapakkaus, 5 litraa", detail: "", price: "1,50 €/kpl" },
  { item: "Pahvipakkaus, 2/3 litraa", detail: "", price: "1,50 €/kpl" },
  { item: "Pahvipakkaus, 5 litraa", detail: "", price: "2,00 €/kpl" },
];

export const discounts = [
  { range: "250–500 kg", discount: "5 %" },
  { range: "yli 500 kg", discount: "10 %" },
  { range: "yli 1000 kg", discount: "20 %" },
];
