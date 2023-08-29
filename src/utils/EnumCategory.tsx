enum Category {
  WOMAN = "여성패션/잡화",
  MAN = "남성패션/잡화",
  FURNITURE = "가구/인테리어",
  HOBBY = "취미/게임/음반/굿즈",
  BOOK = "도서",
  BEAUTY = "뷰티/미용",
  BABY = "유아동/유아물품",
  KITCHEN = "생활주방용품",
  TICKET = "티켓/교환권",
  SPORTS = "스포츠/레저",
  PET = "반려동물용품",
  DIGITAL = "디지털기기",
  ELECTRONICS = "가전제품",
  ART = "예술/희귀/수집품",
  PLANT = "식물",
  FOOD = "가공식품",
  ETC = "기타물품",
};

export const ValueToEnum = (serverValue : string) => {
  switch (serverValue) {
    case "WOMAN":
      return Category.WOMAN;
    case "MAN":
      return Category.MAN;
    case "FURNITURE":
      return Category.FURNITURE;
    case "HOBBY":
      return Category.HOBBY;
    case "BOOK":
      return Category.BOOK;
    case "BEAUTY":
      return Category.BEAUTY;
    case "BABY":
      return Category.BABY;
    case "KITCHEN":
      return Category.KITCHEN;
    case "TICKET":
      return Category.TICKET;
    case "SPORTS":
      return Category.SPORTS;
    case "PET":
      return Category.PET;
    case "DIGITAL":
      return Category.DIGITAL;
    case "ELECTRONICS":
      return Category.ELECTRONICS;
    case "ART":
      return Category.ART;
    case "PLANT":
      return Category.PLANT;
    case "FOOD":
      return Category.FOOD;
    case "ETC":
      return Category.ETC;
    default:
      return null;
  }
};