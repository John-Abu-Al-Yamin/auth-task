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
    borderBottom: "2px solid #000",
    paddingBottom: 8,
    marginBottom: 10,
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
  },

  // Header

  title: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
    textDecoration: "underline",
  },
  // under header

  section: {
    marginBottom: 12,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },

  formRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
    width: "100%",
  },

  leftSide: {
    flexDirection: "row-reverse",
    alignItems: "center",
    // flex: 1,
    justifyContent: "flex-end",
    gap: 4,
  },

  datePart: {
    flexDirection: "row",
    alignItems: "center",
  },

  slash: {
    marginHorizontal: 2,
    fontSize: 10,
    fontWeight: "bold",
  },

  rightSide: {
    flexDirection: "row-reverse",
    alignItems: "center",
    // flex: 1,
    justifyContent: "flex-start",
  },

  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  checkItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 12,
    height: 12,
    border: "1px solid #000",
    margin: "0 4px",
  },

  formLine: {
    flex: 1,
    borderBottom: "1px solid #000",
    height: 12,
    marginLeft: 6,
    marginRight: 6,
  },

  label: {
    fontSize: 9,
    fontWeight: "bold",
    marginLeft: "6px",
  },

  boardTypeRow: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 6,
  },
  boardOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  termsBox: {
    border: "1px solid #000",
    padding: 8,
    marginTop: 10,
    fontSize: 8,
    lineHeight: 1.4,
  },
  signatureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 20,
  },
  signatureField: {
    flex: 1,
    borderTop: "1px solid #000",
    paddingTop: 4,
    textAlign: "center",
    fontSize: 9,
  },
  footer: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },

  flexFooter: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    // gap: 10,
  },

  borderCard: {
    border: "1px solid #000",
    padding: "4px",
    margin: "12px 20px",
  },

  // Golabals
  flex: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
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
});

const StopActivityRequest = ({ formNumber }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* رأس الصفحة / Header */}
        <View style={styles.header}>
          {/* Left */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.headerText}>الجمهورية اليمنية</Text>
            <Text>مكتب الاشغال العامه و الطرق مدريه المنصوره</Text>

            <Text style={styles.headerSubtext}>
              رقم الاستماره : {formNumber}
            </Text>
            <Text style={styles.headerSubtext}>التاريخ : 01/01/2026</Text>
          </View>

          {/* Center column */}
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 3 }}>
              بسم الله الرحمن الرحيم
            </Text>
            <Image src="/logo.png" style={styles.emblemPlaceholder} />
          </View>

          {/* Right */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.headerText}>
              DIRECTORATE FOR{"\n"}
              GENERAL{"\n"}
              MUNICIPALITIES{"\n"}
              MINISTRY & ROADS
            </Text>
          </View>
        </View>

        {/* العنوان الرئيسي */}
        <Text style={styles.title}>طلب ايقاف نشاط</Text>
        <Text style={styles.subtitle}>
          {"LICENCE CANCEL APPLICATION".toUpperCase()}
        </Text>

        <View>
          <View style={styles.flexBetween}>
            <View style={[styles.flex, { flex: 1 }]}>
              <Text>: رقم اخر تجديد </Text>
              <View style={styles.formLine} />
            </View>

            {/* الجزء الأيسر */}
            <View style={styles.leftSide}>
              <Text style={styles.label}>تاريخ انتهاء آخر تجديد</Text>

              {/* اليوم */}
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>

              {/* الشهر */}
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>

              {/* السنة */}
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text>م</Text>
              </View>
            </View>

            {/* الجزء الأيمن */}
            <View style={styles.rightSide}>
              <Text style={styles.label}>:نوع اخر تجديد</Text>

              <View style={styles.checkboxGroup}>
                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>الي</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>يدوي</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.flex}>
            <Text>: نوع المهنه المراد ايقافها</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>الاسم رباعي</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: نوع الهويه</Text>
            <View style={styles.formLine} />
            <Text>: رقم الهويه</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text> الشارع : العنوان</Text>
            <View style={styles.formLine} />
            <Text>: المنطقه</Text>
            <View style={styles.formLine} />
            <Text>: رقم المحل</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text> : اسم الشهرة </Text>
            <View style={[styles.formLine, { flex: 2 }]} />
          </View>

          {/* نوع المحل */}
          <View style={[styles.textcenter, styles.mt]}>
            <Text style={styles.sectionTitle}>
              اقرار : انا الموقع بان التفاصيل المقدمه اعلاء صحيحه و صادقه
              اعتمادا علي جل معروفي واعتمادي
            </Text>
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text> مقدم الطلب: التاريخ : </Text>
            <View style={styles.formLine} />
            <Text>: الامضاء</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.border]} />
        </View>

        <View>
          <Text style={[styles.bold, styles.textCenter, styles.underline]}>
            : تاكيد
          </Text>
          <Text style={[styles.textCenter]}>
            بعد النزول والمعاينه نؤكد بان المذكور اعلاء قد قام بايقاف النشاط
            اعلاء في المحل ولم يعد يزاوله.
          </Text>

          <View style={[styles.flex, styles.mt]}>
            <Text>: اسم المختص</Text>
            <View style={styles.formLine} />
            <Text>: رئيس القسم</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: التوقيع</Text>
            <View style={styles.formLine} />
            <Text>: التوقيع</Text>
            <View style={styles.formLine} />
          </View>
        </View>

        <View style={[styles.borderCard, styles.textRight]}>
          <Text style={styles.medium}>: ملاحظات</Text>
          <Text>لن ادفع رسوم للتراخيص حتي يوافق اولا علي هذا الطلب</Text>
          <Text>يجب عدم مزاوله العمل حتي تدفع الرسوم ويمنح الترخيص</Text>
          <Text>
            اذا وجد المتقدم يزاول العمل قبل اصدار التراخيص المطلوب فسيكون
            للمحكمه بموجب القوانين الفرعيه المتعلقه بذلك.{" "}
          </Text>
        </View>
        <View style={[styles.flexFooter, styles.mt]}>
          <View style={{ flex: 1 }}>
            <View style={[styles.medium, styles.textRight]}>
              <Text style={[styles.medium, styles.textRight]}>
                : المرفقات المطلوبه
              </Text>
            </View>
            <Text style={styles.textRight}>صوره المستفيد 4*6 صوره </Text>
            <Text style={styles.textRight}>رخصة مزاولة المهمة السابقة</Text>

            <Text style={styles.textRight}>افاده مكتب الضرائب</Text>
            <Text style={styles.textRight}>صوره المحل من الداخل و الخرج</Text>
            <Text style={styles.textRight}>افاده مكتب الواجبات</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default StopActivityRequest;
