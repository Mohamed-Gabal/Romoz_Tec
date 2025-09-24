import * as Yup from "yup";

export const validationSchemas = {
    1: Yup.object({
        category: Yup.string().required("اختيار الفئة مطلوب"),
    }),
    2: (category) => {
        const base = Yup.object({
            information: Yup.object({
                adTitle: Yup.string().required("عنوان الإعلان مطلوب"),
                adDescription: Yup.string().required("الوصف مطلوب"),
                adPrice: Yup.string()
                    .notRequired()
                    .matches(/^(?:$|[1-9]\d*(\.\d+)?)$/, "السعر لازم يكون رقم"),
                isNegotiable: Yup.boolean(),
            }),
        });

        if (category === "السيارات") {
            return base.shape({
                information: Yup.object({
                    ...base.fields.information.fields,
                    vehicle: Yup.object({
                        brand: Yup.string().required("يجب ادخال الماركة"),
                        model: Yup.string().required("يجب ادخال الموديل"),
                    }),
                }),
            });
        }

        if (category === "العقارات") {
            return base.shape({
                information: Yup.object({
                    ...base.fields.information.fields,
                    realestate: Yup.object({
                        realestateType: Yup.string().required("نوع العقار مطلوب"),
                        streetType: Yup.string().required("يجب ادخال نوع الشارع"),
                        realestateInterface: Yup.string().required("يجب ادخال الواجهة"),
                    }),
                }),
            });
        }

        return base;
    },

    // 2: Yup.object({
    //     information: Yup.object({
    //         adTitle: Yup.string().required("عنوان الإعلان مطلوب"),
    //         adDescription: Yup.string().required("الوصف مطلوب"),
    //         adPrice: Yup.string().notRequired().matches(/^(?:$|[1-9]\d*(\.\d+)?)$/, "السعر لازم يكون رقم"),
    //         isNegotiable: Yup.boolean(),

    //         vehicle: Yup.object({
    //             brand: Yup.string().required("يجب ادخال الماركة"),
    //             model: Yup.string().required("يجب ادخال الموديل"),
    //         }),

    //         realestate: Yup.object({
    //             realestateType: Yup.string().required("نوع العقار مطلوب"),
    //             streetType: Yup.string().required("يجب ادخال نوع الشارع"),
    //             realestateInterface: Yup.string().required("يجب ادخال الواجهة")
    //         })
    //     }),
    // }),

    3: Yup.object({
        images: Yup.array()
            .of(Yup.string())
            .min(1, "لازم ترفع صورة واحدة على الأقل"),
    }),

    4: Yup.object({
        location: Yup.object({
            detailedAddress: Yup.string().required("العنوان مطلوب"),
            city: Yup.string().required("المدينة مطلوبة"),
            area: Yup.string().required("المنطقة مطلوبة"),
        }),
    }),

    5: Yup.object({
        seller: Yup.object({
            name: Yup.string().required("الاسم مطلوب"),
            phone: Yup.string()
                .matches(/^05\d{8}$/, "رقم الجوال غير صحيح (05xxxxxxxx)")
                .required("رقم الجوال مطلوب"),
            webMessage: Yup.boolean(),
        }),
    }),
};