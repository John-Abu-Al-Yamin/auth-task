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
    width: 60,
    height: 50,
    objectFit: "contain",
  },

  borderCard: {
    border: "1px solid #000",
    padding: "4px",
    margin: "12px 0px",
  },

  flex: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
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
    gap: " 12px 0px",
  },

  border: {
    borderTop: "1px solid #000",
    margin: "14px 0px",
  },

  textRight: {
    textAlign: "right",
  },

  table: {
    marginTop: 20,
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
    paddingRight: 10,
    direction: "rtl",
    textAlign: "right",
    borderLeft: "1px solid #cccccc",
    paddingLeft: 10,
    paddingVertical: 8,
  },
  tableCellAmount: {
    flex: 1,
    textAlign: "center",
    borderLeft: "1px solid #cccccc",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  totalRow: {
    display: "flex",
    flexDirection: "row-reverse",
    // backgroundColor: "#A3C4D1",
    borderTop: "1px solid #cccccc",
  },

  textColor: {
    color: "#4a90a4",
  },

  tableCellNote: {
    flex: 2.5,
    textAlign: "center",
    borderLeft: "1px solid #cccccc",
    paddingHorizontal: 10,
    paddingVertical: 8,
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

  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },

  marginTop: {
    marginTop: 16,
  },
});

const feeItem = [
  { name: "رسوم تخيص", amount: "0.00", discription: "" },
  { name: "المتاخرات", amount: "0.00", discription: "" },
  { name: "مطبوعات", amount: "22" || 0, discription: "" },
];

const ExtractingLicenseWorkStreet = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.header}>
            <View style={styles.backgroundsContainer}>
              <View style={styles.backgroundRight}>
                <Image src="/logo.jpeg" style={styles.backgroundImage} />
              </View>

              <View style={styles.backgroundLeft}>
                <Image
                  src="/logo.jpeg" // يمكنك استخدام صورة مختلفة هنا
                  style={styles.backgroundImage}
                />
              </View>
            </View>

            <View style={{ textAlign: "center", flex: 1, zIndex: 2 }}>
              <View style={styles.flexGap}>
                <Text>الرقم الالي : 22323</Text>
                <Text>رقم الرخصه:3434444</Text>
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
                وزاره الاشغال العامه و الطرق
                {"\n"}
                مكتب عدن
              </Text>
              <Text>مديريه المنصوره</Text>
            </View>
          </View>
          <View style={{ position: "relative", minHeight: 80 }}>
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
                  textAlign: "center",
                  flex: 1,
                  zIndex: 2,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 11,
                    width: 100,
                  }}
                >
                  {" "}
                  |||| ||| |||||||||||| ||||
                </Text>
                <Text
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#000",
                    width: 140,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  رخصة استخدم مساحات عامة مؤقتة
                </Text>
                <Text style={[styles.textRed]}>
                  ( استخدم ارضيه الاسواق العامه و الارصفة )
                </Text>
              </View>
            </View>
          </View>

          <View style={{ position: "relative" }}>
            {/* Background Image */}
            <Image
              src="/logo.jpeg"
              style={{
                position: "absolute",
                top: -20,
                left: 0,
                width: "100%",
                height: "120%",
                opacity: 0.06,
                objectFit: "cover",
                zIndex: 0,
              }}
            />

            {/* detalis user */}
            <View
              style={[
                styles.borderCard,
                styles.textRight,
                styles.flexCol,
                { position: "relative", zIndex: 1 },
              ]}
            >
              {/* تقسيم الصفحة لعمودين */}
              <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                {/* العمود الأيسر للصورة */}
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/logo.jpeg" // صورة إضافية إذا تحب
                    style={{ width: 80, height: 80, objectFit: "contain" }}
                  />
                </View>

                {/* العمود الأيمن للمعلومات */}
                <View style={{ flex: 2, flexDirection: "column", gap: 8 }}>
                  {/* ...المحتوى الحالي كما هو... */}
                  <View style={styles.flex}>
                    <View style={styles.flex}>
                      <Text style={styles.textColor}>اسم المكلف</Text>
                      <Text>جون عماد</Text>
                    </View>

                    <View style={styles.flex}>
                      <Text style={styles.textColor}>نوع الرخصه</Text>
                      <Text>تجديد</Text>
                    </View>
                  </View>

                  <View style={styles.flex}>
                    <View style={styles.flex}>
                      <Text style={styles.textColor}>رقم البطاقة</Text>
                      <Text>434343444</Text>
                    </View>

                    <View style={styles.flex}>
                      <Text style={styles.textColor}>نوعها :</Text>
                      <Text>جواز سفر</Text>
                    </View>

                    <View style={styles.flex}>
                      <Text style={styles.textColor}>تاريخها</Text>
                      <Text>1/1/2023</Text>
                    </View>
                  </View>

                  <View style={styles.baseFlex}>
                    <Text style={styles.textColor}>الاستخدام :</Text>
                    <Text>(12م) عربيه فلافل </Text>
                  </View>

                  <View style={styles.baseFlex}>
                    <Text style={styles.textColor}>العنوان :</Text>
                    <Text>المعل شارع مدرم</Text>
                  </View>

                  <View style={styles.flex}>
                    <View style={styles.flex}>
                      <Text style={styles.textColor}>الملاحظه:</Text>
                      <Text> </Text>
                    </View>

                    <View style={styles.flex}>
                      <Text style={styles.textColor}>رقم الملف</Text>
                      <Text>3232322</Text>
                    </View>
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
              {feeItem.map((item, index) => (
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
                    backgroundColor: "#A3C4D1",
                  },
                ]}
              >
                <Text style={styles.tableCell}>الاجمالي</Text>
                <Text style={styles.tableCellAmount}>788787878</Text>
                <Text style={styles.tableCellNote}>الف من الرسوم</Text>
              </View>

              <View
                style={[
                  styles.totalRow,
                  {
                    backgroundColor: "#C7EAD9",
                  },
                ]}
              >
                <Text style={styles.tableCell}>المدفوع</Text>
                <Text style={styles.tableCellAmount}>788787878</Text>
                <Text style={styles.tableCellNote}>الف من الرسوم</Text>
              </View>
              <View
                style={[
                  styles.totalRow,
                  {
                    backgroundColor: "#EAC7C7",
                  },
                ]}
              >
                <Text style={styles.tableCell}>المتبقي</Text>
                <Text style={styles.tableCellAmount}>788787878</Text>
                <Text style={styles.tableCellNote}>لا شيء</Text>
              </View>
            </View>

            <View style={[styles.borderCard, styles.marginTop]}>
              <Text style={[styles.textRed, styles.textRight, styles.subtitle]}>
                ملاحظه هامة: هذه الرخصة مؤقتة ويحق لمكتب الاشعال العامة و الطرق
                سحب هذة الرخصه في اي وقت دون تحمل اي مسؤلية تجاه صاحبهااذا دعت
                الحاجه لذلك
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 120,
                textAlign: "center",
                marginLeft: 80,
                marginTop: 16,
                fontWeight: "bold",
              }}
            >
              مدير مكتب الاشغال العامةو الطرق
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

export default ExtractingLicenseWorkStreet;
