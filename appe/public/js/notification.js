frappe.ui.form.on('Notification', {
	refresh(frm) {
		// your code here
	},
	
	document_type: function(frm) {

        // frm.doc.custom_crm_whatsapp_template_fields = "";
	    // frm.refresh_field("custom_crm_whatsapp_template_fields");

	    // var str = "name\n";
	    // var doc_fields = frappe.get_meta(frm.doc.document_type).fields;
	    // doc_fields.forEach(element => {
	    //     if(element.fieldtype == "Section Break" || element.fieldtype == "Column Break"){
	            
	    //     }else{
    	//         str = str + element.fieldname + "\n"    
	    //     }
	        
	    // });
	    // var df = frappe.meta.get_docfield("CRM Whatsapp Template Fields","field_name", cur_frm.doc.name);
	    // df.options = str;
	    
	}
})