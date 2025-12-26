import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// تسجيل خط عربي
Font.register({
  family: "Cairo",
  fonts: [
    { src: "/fonts/Cairo/static/Cairo-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Cairo/static/Cairo-Bold.ttf", fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "2px 16px",
    direction: "rtl",
    fontFamily: "Cairo",
    fontSize: 8,
    position: "relative",
  },

  contentWrapper: {
    flexDirection: "column",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
    marginBottom: 0,
    gap: 12,
    position: "relative",
    zIndex: 1,
    minHeight: 100,
  },

  backgroundsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: -1,
  },

  backgroundRight: {
    width: "20%",
    height: "70%",
    opacity: 0.06,
  },

  backgroundLeft: {
    width: "20%",
    height: "70%",
    opacity: 0.06,
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  headerText: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },

  emblemPlaceholder: {
    width: 40,
    height: 40,
    objectFit: "contain",
  },

  borderCard: {
    border: "1px solid #000",
    padding: "4px",
  },

  flexGap: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: "0px 18px",
  },

  flexCol: {
    display: "flex",
    flexDirection: "column",
    gap: "6px 0px", // بدل 12px
  },

  border: {
    borderTop: "1px solid #000",
    margin: "10px 0px",
  },

  textRight: {
    textAlign: "right",
  },

  textCenter: {
    textAlign: "center",
  },

  textBold: {
    fontSize: 12,
    fontWeight: "bold",
  },

  table: {
    marginTop: 10,
    border: "1 solid #000000",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "#A3C4D1",
    borderBottom: "1 solid #cccccc",
    fontWeight: "bold",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row-reverse",
    borderBottom: "1 solid #cccccc",
  },
  tableCell: {
    flex: 1,
    paddingRight: 0,
    direction: "rtl",
    textAlign: "right",
    borderLeft: "1px solid #cccccc",
    paddingLeft: 0,
    paddingVertical: 0,
  },

  tableCellAmount: {
    flex: 1,
    textAlign: "center",
    borderLeft: "1px solid #cccccc",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  totalRow: {
    display: "flex",
    flexDirection: "row-reverse",
    borderTop: "1px solid #cccccc",
  },

  textColor: {
    color: "#4a90a4",
  },

  tableCellNote: {
    flex: 2.5,
    textAlign: "center",
    borderLeft: "1px solid #cccccc",
    paddingHorizontal: 0,
    paddingVertical: 2,
  },

  baseFlex: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: "0px 8px",
  },

  textRed: {
    color: "red",
  },

  yellowColumn: {
    backgroundColor: "#F9F5ED",
  },

  marginTop: {
    marginTop: 8,
  },

  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  label: {
    width: 200,
    color: "#4a90a4",
  },

  value: {
    flex: 1,
    textAlign: "right",
  },

  flex: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8, // قلل القيمة لجعل العناصر أقرب
  },

  // أضف هذا الستايل الجديد
  flexItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
    flex: 1, // يجعل العنصرين يأخذان نفس المساحة
  },

  // أو هذا الخيار إذا تريد محاذاة مختلفة
  inlineRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4, // مسافة بين الأسطر
  },

  // يمكنك إضافة هذا للتحكم بعرض العناصر
  inlineItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    minWidth: "45%", // عرض ثابت للعناصر
  },
});

// رسوم الرخصة
const feesSection = [
  { name: "رسوم ترخيص", amount: "0.00", discription: "" },
  { name: "رسوم غرامة", amount: "0.00", discription: "" },
  { name: "دعايه واعلان", amount: "22", discription: "" },
  { name: "رسوم اسرة الرقود", amount: "22", discription: "" },
  { name: "المتاخرات", amount: "22", discription: "" },
];

// رسوم النظافة
const cleaningSection = [
  { name: "دعاية واعلان", amount: "22", discription: "" },
  { name: "رسوم تحسين", amount: "22", discription: "" },
  { name: "نظافه", amount: "22", discription: "" },
  { name: "متاخرات نظافه", amount: "22", discription: "" },
  { name: "مطبوعات", amount: "22", discription: "" },
  { name: "اجمالي النظافه", amount: "22", discription: "" },
];

const ExtractingLicenseHealth = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.header}>
            <View style={styles.backgroundsContainer}>
              <View style={styles.backgroundRight}>
                <Image src="/logo.png" style={styles.backgroundImage} />
              </View>

              <View style={styles.backgroundLeft}>
                <Image src="/logo.png" style={styles.backgroundImage} />
              </View>
            </View>

            <View style={{ textAlign: "center", flex: 1, zIndex: 2 }}>
              <View style={styles.flexGap}>
                <Text>الرقم الالي </Text>
                <Text>1234556</Text>
              </View>

              <View style={styles.flexGap}>
                <Text>رقم الترخيص</Text>
                <Text>786786877</Text>
              </View>

              <View style={styles.flexGap}>
                <Text>تاريخ اصدار الرخصة</Text>
                <Text>1/1/2023</Text>
              </View>

              <View style={styles.flexGap}>
                <Text>تاريخ ابتداء الرخصة</Text>
                <Text>1/1/2023</Text>
              </View>

              <View style={styles.flexGap}>
                <Text>تاريخ انتهاء الرخصة</Text>
                <Text>1/1/2023</Text>
              </View>
            </View>

            {/* Center column */}
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                zIndex: 2,
              }}
            >
              <Text style={{ fontSize: 10, marginBottom: 2 }}>
                بسم الله الرحمن الرحيم
              </Text>
              <Image src="/logo.jpeg" style={styles.emblemPlaceholder} />
            </View>

            {/* Left */}
            <View style={{ textAlign: "center", flex: 1, zIndex: 2 }}>
              <Text style={styles.headerText}>الجمهورية اليمنية</Text>
              <Text>
                وزاره الصحه العامة و السكان
                {"\n"}
                مكتب الصحه و السكان - عدن
                {"\n"}
                اداره المنشات و الطبيه و الصحيه العامة
                {"\n"}
                مكتب الصحه العامه و السكان المنصورة
              </Text>
            </View>
          </View>

          <View style={{ position: "relative", minHeight: 40 }}>
            <View
              style={{
                borderBottom: "1px solid #000",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                zIndex: 1,
              }}
            />

            <View
              style={{
                position: "absolute",
                top: -14,
                left: 0,
                right: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                opacity: 0.06,
                zIndex: 0,
              }}
            >
              <Image
                src="/logo.jpeg"
                style={{ width: "50%", height: 70, objectFit: "contain" }}
              />
              <Image
                src="/logo.jpeg"
                style={{ width: "50%", height: 70, objectFit: "contain" }}
              />
            </View>

            <View
              style={{
                position: "relative",
                zIndex: 2,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#000",
                    width: 100,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  ترخيص فتح و تشغيل (تجديد)
                </Text>
                <Text
                  style={[
                    styles.textRed,
                    { textAlign: "center", marginTop: 0 },
                  ]}
                >
                  ( مركز طبي )
                </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <Text style={{ textAlign: "right", width: "100%", marginTop: 4 }}>
              بناء على قانون رقم (60) لعام 1999م بشأن المنشآت الطبية والصحية
              الخاصة وعلى القانون رقم (26) لعام 2002م بشأن مزاولة المهن الطبية
            </Text>

            <Text style={{ textAlign: "right", width: "100%", marginTop: 4 }}>
              وبعد الاطلاع على استمارة المعاينة وثبوت تطابق بيانات المنشأة
              الهندسية : والفنية مع ما ورد في اللائحة يمنح هذا على التراخيص
              وفقاً للتفاصيل التالية
            </Text>
          </View>

          <View style={{ position: "relative" }}>
            {/* detalis user */}

            <View
              style={[
                styles.borderCard,
                styles.textRight,
                styles.flexCol,
                styles.marginTop,
                { position: "relative", zIndex: 1 },
              ]}
            >
              {/* تقسيم الصفحة لعمودين */}
              <View style={{ display: "flex", flexDirection: "row", gap: 0 }}>
                {/* العمود الأيسر للصورة */}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/logo.jpeg"
                    style={{ width: 80, height: 80, objectFit: "contain" }}
                  />
                </View>

                {/* العمود الأيمن للمعلومات */}
                <View style={{ flex: 2, flexDirection: "column", gap: 4 }}>
                  {/* الاسم - سطر واحد */}
                  <View style={styles.row}>
                    <Text style={styles.label}>يمنح الترخيص</Text>
                    <Text style={styles.value}>جون عماد</Text>
                  </View>

                  {/* الجنسية ورقم الترخيص - سطر واحد */}
                  <View style={styles.inlineRow}>
                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>الجنسية:</Text>
                      <Text style={{ marginRight: 4 }}>اليمن</Text>
                    </View>

                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>رقم الترخيص:</Text>
                      <Text style={{ marginRight: 4 }}>0002468</Text>
                    </View>
                  </View>

                  {/* الهوية ورقم الهوية - سطر واحد */}
                  <View style={styles.inlineRow}>
                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>الهوية:</Text>
                      <Text style={{ marginRight: 4 }}>بطاقة شخصية</Text>
                    </View>

                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>رقم الهوية:</Text>
                      <Text style={{ marginRight: 4 }}>1234ث356</Text>
                    </View>
                  </View>

                  {/* المؤهل ومكان المؤهل - سطر واحد */}
                  <View style={styles.inlineRow}>
                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>المؤهل:</Text>
                      <Text style={{ marginRight: 4 }}>بكالوريوس طب أسنان</Text>
                    </View>

                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>مكان المؤهل:</Text>
                      <Text style={{ marginRight: 4 }}>جامعة عدن</Text>
                    </View>
                  </View>

                  {/* تاريخ الإصدار ورقم القيد - سطر واحد */}
                  <View style={styles.inlineRow}>
                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>تاريخ الإصدار:</Text>
                      <Text style={{ marginRight: 4 }}>2023-01-01</Text>
                    </View>

                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>رقم القيد:</Text>
                      <Text style={{ marginRight: 4 }}>ط/54</Text>
                    </View>
                  </View>

                  {/* التخصص والمهنة - سطر واحد */}
                  <View style={styles.inlineRow}>
                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>التخصص:</Text>
                      <Text style={{ marginRight: 4 }}>طب أسنان</Text>
                    </View>

                    <View style={styles.inlineItem}>
                      <Text style={styles.textColor}>المهنة:</Text>
                      <Text style={{ marginRight: 4 }}>طبيب أسنان</Text>
                    </View>
                  </View>

                  {/* العنوان - سطر واحد */}
                  <View style={styles.row}>
                    <Text style={styles.label}>العنوان</Text>
                    <Text style={styles.value}>المنصورة - حي عبدالعزيز</Text>
                  </View>

                  {/* الملاحظة - سطر واحد */}
                  <View style={styles.row}>
                    <Text style={styles.label}>الملاحظة</Text>
                    <Text style={styles.value}></Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Table */}
            <View style={[styles.table, { position: "relative" }]}>
              {/* Background Image for Table */}
              <Image
                src="/logo.jpeg"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0.06,
                  objectFit: "cover",
                  zIndex: 0,
                }}
              />

              {/* Header */}
              <View style={styles.tableHeader}>
                <Text style={{ ...styles.tableCell, fontWeight: "bold" }}>
                  الرسوم
                </Text>
                <Text style={{ ...styles.tableCellAmount, fontWeight: "bold" }}>
                  المبلغ
                </Text>
                <Text style={{ ...styles.tableCellNote, fontWeight: "bold" }}>
                  الملاحظة
                </Text>
              </View>

              {/* Rows */}
              {feesSection.map((item, index) => (
                <View
                  key={index}
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #cccccc",
                  }}
                >
                  <Text style={[styles.tableCell, styles.yellowColumn]}>
                    {item.name}
                  </Text>
                  <Text style={styles.tableCellAmount}>{item.amount}</Text>
                  <Text style={[styles.tableCellNote]}>{item.discription}</Text>
                </View>
              ))}

              {/* Total Row */}
              <View
                style={[
                  styles.totalRow,
                  {
                    backgroundColor: "#D9EAF2",
                  },
                ]}
              >
                <Text style={styles.tableCell}>اجمالي الرسوم</Text>
                <Text style={styles.tableCellAmount}>22,2000</Text>
                <Text style={styles.tableCellNote}>
                  فقط اثنان وعشرون الف من الرسوم
                </Text>
              </View>
              {/* Rows */}
              {cleaningSection.map((item, index) => (
                <View
                  key={index}
                  style={{
                    ...styles.tableRow,
                    borderBottom: "1px solid #cccccc",
                  }}
                >
                  <Text style={[styles.tableCell, styles.yellowColumn]}>
                    {item.name}
                  </Text>
                  <Text style={styles.tableCellAmount}>{item.amount}</Text>
                  <Text style={[styles.tableCellNote]}>{item.discription}</Text>
                </View>
              ))}

              {/* Total Row */}
              <View
                style={[
                  styles.totalRow,
                  {
                    backgroundColor: "#D9EAF2",
                  },
                ]}
              >
                <Text style={styles.tableCell}>اجمالي نظافة</Text>
                <Text style={styles.tableCellAmount}>788787878</Text>
                <Text style={styles.tableCellNote}>الف من الرسوم</Text>
              </View>
              <View
                style={[
                  styles.totalRow,
                  {
                    backgroundColor: "#A3C4D1",
                  },
                ]}
              >
                <Text style={styles.tableCell}>الاجمالي</Text>
                <Text style={styles.tableCellAmount}>788787878</Text>
                <Text style={styles.tableCellNote}>الف من الرسوم</Text>
              </View>
            </View>
          </View>
          <Text style={styles.marginTop}>
            علي ان يلتزم المصرح له بالترخيص بالقوانين و النظم واللوائح المنظمة
            لعمل المنشات الطبية و الصحية الخاصة السارية في الجمهورية
          </Text>

          <View style={styles.flex}>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 120,
                textAlign: "center",
                // marginLeft: 80,
                marginTop: 16,
                fontWeight: "bold",
              }}
            >
              رئيس قسم المنشآت الطبية و الصحية الخاصة
              {"\n"} م/المنصورة
            </Text>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 120,
                textAlign: "center",
                // marginLeft: 80,
                marginTop: 16,
                fontWeight: "bold",
              }}
            >
              مدير مكتب الصحة العامة و السكان مديرية المنصورة
              {"\n"} م/عدن
            </Text>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 120,
                textAlign: "center",
                // marginLeft: 80,
                marginTop: 16,
                fontWeight: "bold",
              }}
            >
              مدير اداره المنشات الطبية و الصحية الخاصة
              {"\n"} م/عدن
            </Text>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 150,
                textAlign: "center",
                // marginLeft: 80,
                marginTop: 16,
                fontWeight: "bold",
              }}
            >
              مدير عام مكتب الصحة العامة و السكان
              {"\n"} م/عدن
            </Text>
          </View>

          {/* bg footer image */}
          <View style={{ position: "relative", marginTop: 20, minHeight: 60 }}>
            {/* Background Images */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                opacity: 0.06,
                zIndex: 0,
              }}
            >
              <Image
                src="/logo.jpeg"
                style={{ width: "20%", height: "100%", objectFit: "contain" }}
              />
              <Image
                src="/logo.jpeg"
                style={{ width: "20%", height: "100%", objectFit: "contain" }}
              />
            </View>

            {/* Actual footer content */}
            <View
              style={{
                position: "relative",
                zIndex: 1,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ExtractingLicenseHealth;
