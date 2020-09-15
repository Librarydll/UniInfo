
export class TableHeader {
  public code:string;
  public faculty: string;
  public grant: string;
  public contract: string;
  public direction: string;
  public pass: string;
  public accept: string;
  public f: string;
  public s: string;
  public t: string;
  public plan: string;
  public error: string;

   setTableHeader(version = "ru") {

    switch (version) {
      case "uz":
        this.code = 'Shifri';
        this.faculty = 'Nomi';
        this.grant = 'Davlat granti';
        this.contract = 'To`lov shartnoma';
        this.direction = 'Ta`lim yo`nalishi';
        this.pass = 'O`tish bali';
        this.accept = 'Qabul';
        this.f = '1 - ta`lim yo`nalishi sifatida tanlaganlar soni';
        this.s = '2 - ta`lim yo`nalishi sifatida tanlaganlar soni';
        this.t = '3 - ta`lim yo`nalishi sifatida tanlaganlar soni';
        this.plan = 'Qabul reja';
        this.error = 'Sizning surovingiz buyicha xech narsa topilmadi';
        break;
      case "ru":
        this.code = 'Код';
        this.faculty = 'Название';
        this.grant = 'Грант';
        this.contract = 'Контракт';
        this.direction = 'Направление обучения';
        this.pass = 'Проходные баллы';
        this.accept = 'Заявки';
        this.f = 'выбор как первое направление';
        this.s = 'выбор как второе направление';
        this.t = 'выбор как третье направление';
        this.plan = 'Колличество мест';
        this.error = 'Ничего не найдено по вашему запросу';
        break;
      default:
    }
  }
  
}
