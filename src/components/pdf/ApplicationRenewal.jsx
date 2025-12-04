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
    flex: 1,
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
    flex: 1,
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
    borderBottom: "1px dashed #000",
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

const ApplicationRenewal = ({ formNumber }) => {
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
        <Text style={styles.title}>
          استماره طلب الحصول علي تراخيص مزاوله مهنه نشاط او تجديد
        </Text>
        <Text style={styles.subtitle}>
          {"APPLICATION FOR LICENCE OR RENEWAL".toUpperCase()}
        </Text>

        <View>
          <View style={styles.formRow}>
            {/* الجزء الأيمن */}
            <View style={styles.rightSide}>
              <Text style={styles.label}>:نوع الطلب</Text>

              <View style={styles.checkboxGroup}>
                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>جديد</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>تجديد</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>مركز رئيسي</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>فرع</Text>
                </View>
              </View>
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
          </View>

          <View style={styles.flex}>
            <Text>نوع المهنه</Text>
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
            <Text>: مكان الاصدار</Text>
            <View style={styles.formLine} />
            <Text>: تاريخ الاصدار</Text>

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
            <Text>: تاريخ الانتهاء</Text>

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

          <View style={[styles.flex, styles.mt]}>
            <Text>معلومات التواصل : الجوال </Text>
            <View style={[styles.formLine, { flex: 2 }]} />
            <Text>: تلفون</Text>
            <View style={styles.formLine} />
            <Text>: فكس</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: العنوان</Text>
            <View style={[styles.formLine, { flex: 2 }]} />
            <Text>: رقم المحل ان وجد</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text> : اسم شهرة المحل</Text>
            <View style={[styles.formLine, { flex: 2 }]} />
          </View>

          {/* نوع المحل */}
          <View style={[styles.flex, styles.mt]}>
            <Text style={styles.labelSmall}>: نوع ملكية العقار</Text>

            <View style={styles.checkboxGroup}></View>
          </View>

          {/* تمليك مع حقل اسم المالك */}
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text style={styles.checkboxLabel}>تمليك</Text>
            <View style={styles.checkbox} />
            <Text> : اسم المالك</Text>
            <View style={[styles.formLine, { flex: 1 }]} />
          </View>

          {/* إيجار مع حقل تاريخ الإيجار */}
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text style={styles.checkboxLabel}>إيجار</Text>
            <View style={styles.checkbox} />
            <Text> : قيمه الايجار</Text>
            <View style={[styles.formLine, { flex: 2 }]} />
            <Text> : العمله</Text>
            <View style={[styles.formLine]} />
          </View>

          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginTop: 4,
              width: "100%", // ✅ تصحيح typo
            }}
          >
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Text>: تاريخ الإيجار</Text>

              <Text>: من</Text>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text>م</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Text>: إلى</Text>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text>م</Text>
              </View>
            </View>
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
          <Text style={[styles.bold, styles.textRight, styles.underline]}>
            : بيانات اضافيه
          </Text>
        </View>

        <View style={styles.flex}>
          <Text style={styles.label}>:نوع اللوحه</Text>

          <View style={styles.checkboxGroup}>
            <View style={styles.checkItem}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>لوحه عادية</Text>
            </View>

            <View style={styles.checkItem}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>لوحه مضيئه</Text>
            </View>
          </View>
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text> : مساحه اللوحه</Text>
          <Text> : الطول</Text>
          <Text>)</Text>
          <View style={[styles.formLine]} /> <Text>(</Text>
          <Text>م</Text>
          <Text>*</Text>
          <Text> : العرض</Text>
          <Text>)</Text>
          <View style={[styles.formLine]} /> <Text>(</Text>
          <Text>م</Text>
          <Text>=</Text>
          <Text> : اجمالي</Text>
          <Text>)</Text>
          <View style={[styles.formLine]} /> <Text>(</Text>
          <Text>متر</Text>
          <Text style={{ marginRight: 12 }}> : عدد الفتحات</Text>
          <View style={[styles.formLine]} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text> : مساحه العوائق</Text>
          <Text> : الطول</Text>
          <Text>)</Text>
          <View style={[styles.formLine]} /> <Text>(</Text>
          <Text>م</Text>
          <Text>*</Text>
          <Text> : العرض</Text>
          <Text>)</Text>
          <View style={[styles.formLine]} /> <Text>(</Text>
          <Text>م</Text>
          <Text>=</Text>
          <Text> : اجمالي</Text>
          <Text>)</Text>
          <View style={[styles.formLine]} /> <Text>(</Text>
          <Text>متر</Text>
          <Text style={{ marginRight: 12 }}> : عدد الموظفين</Text>
          <View style={[styles.formLine]} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>: الاحداثي الشمالي</Text>
          <View style={styles.formLine} />
          <Text>: الاحداثي الشرقي</Text>
          <View style={styles.formLine} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text style={[styles.bold, styles.textRight, styles.underline]}>
            : يستحق غرامه مزاوله المهنه بدون ترخيص
          </Text>
          <Text style={{ width: 25 }}>نعم</Text>
          <Text>)</Text>
          <View style={[{ width: 40 }]} />
          <Text>(</Text>

          <Text style={{ width: 25 }}>لا</Text>
          <Text>)</Text>
          <View style={[{ width: 40 }]} />
          <Text>(</Text>
        </View>

        <View style={[styles.textcenter, styles.mt]}>
          <Text style={styles.sectionTitle}>
            اقرار : انا الموقع بان التفاصيل المقدمه اعلاء صحيحه و صادقه ومن وقع
            نزولي لمعاينه الموقع
          </Text>
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>: اسم الشخص</Text>
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

        <View style={[styles.borderCard, styles.textRight]}>
          <Text style={styles.medium}>: ملاحظات</Text>
          <Text>لن ادفع رسوم للتراخيص حتي يوافق اولا علي هذا الطلب</Text>
          <Text>يجب عدم مزاوله العمل حتي تدفع الرسوم ويمنح الترخيص</Text>
          <Text>
            اذا وجد المقدم يزاول العمل قبل اصدار التراخيص المطلوب فسيكون للمحكمه
            بموجب القوانين الفرعيه المتعلقه بذلك.{" "}
          </Text>
        </View>
        <View style={[styles.flexFooter, styles.mt]}>
          <View style={{ flex: 1 }}>
            <View style={[styles.medium, styles.textRight]}>
              <Text style={[styles.medium, styles.textRight]}>
                : المرفقات المطلوبه
              </Text>
            </View>
            <Text style={styles.textRight}>
              صوره المستفيد 4*6 صوره البطاقه الشخصيه{" "}
            </Text>
            <Text style={styles.textRight}>
              عقد الايجار او الملكيه - فاتوره كهرباء
            </Text>
            <Text style={styles.textRight}>
              صوره المحل من الداخل و الخرج توضح العوائق و عدد الفتحات واللوحه
            </Text>
            <Text style={styles.textRight}>
              السجل التجاري في حال الرغبه بكتابه الاسم التجاري في الترخيص
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <View style={[styles.medium, styles.textRight]}>
              <Text style={[styles.medium, styles.textRight]}>
                : بالاضافه للمرفقات التاليه في حال التجديد
              </Text>
            </View>
            <Text style={styles.textRight}>رخصة مزاولة المهمة السابقة</Text>
            <Text style={styles.textRight}>سند سداد مكتب الضرئب</Text>
            <Text style={styles.textRight}>سند سداد مكتب الواجبات</Text>
            <Text style={styles.textRight}>
              في حال فرع أو تجديد فرع يتم ارفاق ترخيص المركز الرئيسي
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ApplicationRenewal;
