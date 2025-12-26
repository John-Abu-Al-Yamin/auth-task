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
    fontSize: 7,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
    marginBottom: 0,
    gap: 12,
  },
  headerText: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtext: {
    fontSize: 9,
    textAlign: "center",
  },
  emblemPlaceholder: {
    width: 60,
    height: 50,
    objectFit: "contain",
  },

  // Header

  textnormal: {
    fontSize: 10,
    marginBottom: 2,
    textAlign: "center",
  },

  borderCard: {
    border: "1px solid #000",
    padding: "4px",
    margin: "12px 0px",
  },

  // Golabals
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

  flexBetween: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexCol: {
    display: "flex",
    flexDirection: "column",
    gap: " 12px 0px",
    // width: "100%",
  },

  mt: {
    marginTop: 4,
  },
  textcenter: {
    textAlign: "center",
  },
  border: {
    border: "1px solid #000",
    margin: "14px 0px",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 12,
  },
  medium: {
    fontWeight: "medium",
    fontSize: 10,
  },

  textRight: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  textCenter: {
    textAlign: "center",
  },
  underline: {
    textDecoration: "underline",
  },

  table: {
    marginTop: 20,
    border: "1 solid #000000",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "#C7E1EA",
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
    backgroundColor: "#C7E1EA", // نفس الهيدر ✅
    borderTop: "1px solid #cccccc",
  },

  textColor: {
    color: "#4a90a4",
  },

  tableCellNote: {
    flex: 2.5, // ✅ أكبر من الباقي
    textAlign: "center",
    borderLeft: "1px solid #cccccc",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  px: {
    padding: "0px 8px",
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
});
const LicenseStopDeposit = () => {
  const feeItems = [
    { name: "دعاية واعلان", amount: "3,000.00", discription: "ملاحظات عامة" },
    { name: "رسوم تحسین", amount: "1,000.00", discription: "" },
    { name: "نظافة", amount: "0.00", discription: "" },
    { name: "متاخرات نظافة", amount: "1,200.00", discription: "" },
    { name: "مطبوعات", amount: "1,200.00", discription: "" },
  ];

  const feeItem = [
    { name: "رسوم محل", amount: "3,000.00", discription: "ملاحظات عامة" },
    { name: "رسوم فتحات", amount: "1,000.00", discription: "" },
    { name: "رسوم عوائق", amount: "0.00", discription: "" },
    { name: "رسوم غرامه", amount: "1,200.00", discription: "" },
    { name: "دعايه واعلان", amount: "1,200.00", discription: "" },
    { name: "متاخرات رسوم", amount: "1,200.00", discription: "" },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* رأس الصفحة / Header */}
        <View style={styles.header}>
          {/* Right BarCode */}
          <View style={{ textAlign: "center", flex: 1 }}></View>

          {/* Center column */}
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            <Text style={{ fontSize: 10, marginBottom: 2 }}>
              بسم الله الرحمن الرحيم
            </Text>
            <Image src="/logo.jpeg" style={styles.emblemPlaceholder} />
          </View>

          {/* Left */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.headerText}>الجمهورية اليمنية</Text>
            <Text>
              وزاره الاشغال العامه و الطرق
              {"\n"}
              مكتب عدن
            </Text>
            <Text>مديريه المنصوره</Text>
          </View>
        </View>

        <View style={styles.border}></View>

        <View style={styles.header}>
          {/* Left */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.textnormal}>رسوم النظافة</Text>
          </View>

          {/* Center column */}
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            <Text
              style={[
                styles.bold,
                styles.textRight,
                styles.flex,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "#000",
                  width: 160,
                  textAlign: "right",
                  alignSelf: "flex-end",
                },
              ]}
            >
              حافظة توريد نقدية الي الخزينة
            </Text>
            <Text
              style={[
                styles.bold,
                styles.textRight,
                styles.flex,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "#000",
                  width: 160,
                  textAlign: "right",
                  alignSelf: "flex-end",
                },
              ]}
            >
              لابقاف رخصة مزاولة مهنة
            </Text>
            <Text>
              (
              <Text style={[styles.textnormal, styles.textRed]}>
                {" "}
                مطعم وجبات سريعه{" "}
              </Text>
              )
            </Text>
          </View>

          {/* Right */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.textnormal}>الرقم الالي : 00033</Text>
          </View>
        </View>

        <View style={[styles.borderCard, styles.textRight, styles.flexCol]}>
          <View style={styles.flex}>
            <View style={styles.flex}>
              <Text style={styles.textColor}>تاريخ الاصدار :</Text>
              <Text>12/12/2023</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.textColor}>تاريخ ابتداء الرخصة :</Text>
              <Text>23/12/2023 م</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.textColor}>تاريخ انتهاء الرخصة</Text>
              <Text>23/12/2024</Text>
            </View>
          </View>

          <View>
            <View style={styles.baseFlex}>
              <Text style={styles.textColor}>اسم المكلف :</Text>
              <Text>جون</Text>
            </View>
            <View style={styles.baseFlex}>
              <Text style={styles.textColor}>شهرة المحل:</Text>
              <Text>كيوت</Text>
            </View>
          </View>
        </View>

        {/* Table */}

        <View style={styles.table}>
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
          {feeItems.map((item, index) => (
            <View
              key={index}
              style={{
                ...styles.tableRow,
                borderBottom: "1px solid #cccccc", // فصل بين الصفوف
              }}
            >
              <Text style={[styles.tableCell, styles.yellowColumn]}>
                {item.name}
              </Text>
              <Text style={styles.tableCellAmount}>{item.amount}</Text>
              <Text style={[styles.tableCellNote]}>
                {item.discription || "-"}
              </Text>
            </View>
          ))}
          {/* Total Row */}
          <View style={styles.totalRow}>
            <Text style={styles.tableCell}>اجمالي النظافة</Text>
            <Text style={styles.tableCellAmount}>485,200.00</Text>
            <Text style={styles.tableCellNote}>
              أربعمائة وخمسة وثمانون ألف ومائتان ريال
            </Text>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        {/* رأس الصفحة / Header */}
        <View style={styles.header}>
          {/* Right BarCode */}
          <View style={{ textAlign: "center", flex: 1 }}></View>

          {/* Center column */}
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            <Text style={{ fontSize: 10, marginBottom: 2 }}>
              بسم الله الرحمن الرحيم
            </Text>
            <Image src="/logo.jpeg" style={styles.emblemPlaceholder} />
          </View>

          {/* Left */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.headerText}>الجمهورية اليمنية</Text>
            <Text>
              وزاره الاشغال العامه و الطرق
              {"\n"}
              مكتب عدن
            </Text>
            <Text>مديريه المنصوره</Text>
          </View>
        </View>

        <View style={styles.border}></View>

        <View style={styles.header}>
          {/* Left */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.textnormal}>رسوم ايقاف رخصة</Text>
          </View>

          {/* Center column */}
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text
              style={[
                styles.bold,
                styles.textRight,
                styles.flex,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "#000",
                  width: 160,
                  textAlign: "right",
                  alignSelf: "flex-end",
                },
              ]}
            >
              حافظة توريد نقدية الي الخزينة
            </Text>
            <Text
              style={[
                styles.bold,
                styles.textRight,
                styles.flex,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: "#000",
                  width: 160,
                  textAlign: "right",
                  alignSelf: "flex-end",
                },
              ]}
            >
              لابقاف رخصة مزاولة مهنة
            </Text>
            <Text>
              (
              <Text style={[styles.textnormal, styles.textRed]}>
                {" "}
                تجاره عامة{" "}
              </Text>
              )
            </Text>
          </View>

          {/* Right */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.textnormal}>الرقم الالي : 00033</Text>
          </View>
        </View>

        <View style={[styles.borderCard, styles.textRight, styles.flexCol]}>
          <View style={styles.flex}>
            <View style={styles.flex}>
              <Text style={styles.textColor}>تاريخ الاصدار :</Text>
              <Text>12/12/2023</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.textColor}>تاريخ ابتداء الرخصة :</Text>
              <Text>23/12/2023 م</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.textColor}>تاريخ انتهاء الرخصة</Text>
              <Text>23/12/2024</Text>
            </View>
          </View>

          <View>
            <View style={styles.baseFlex}>
              <Text style={styles.textColor}>اسم المكلف :</Text>
              <Text>جون</Text>
            </View>
            <View style={styles.baseFlex}>
              <Text style={styles.textColor}>شهرة المحل:</Text>
              <Text>كيوت</Text>
            </View>
          </View>
        </View>

        {/* Table */}

        <View style={styles.table}>
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
                borderBottom: "1px solid #cccccc", // فصل بين الصفوف
              }}
            >
              <Text style={[styles.tableCell, styles.yellowColumn]}>
                {item.name}
              </Text>
              <Text style={styles.tableCellAmount}>{item.amount}</Text>
              <Text style={[styles.tableCellNote]}>
                {item.discription || "-"}
              </Text>
            </View>
          ))}
          {/* Total Row */}
          <View style={styles.totalRow}>
            <Text style={styles.tableCell}>اجمالي الرسوم</Text>
            <Text style={styles.tableCellAmount}>485,200.00</Text>
            <Text style={styles.tableCellNote}>
              أربعمائة وخمسة وثمانون ألف ومائتان ريال
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default LicenseStopDeposit;
