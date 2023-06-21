Blockly.JavaScript['soft_ui_main'] = function(block) {
    var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
    var value_client_id = Blockly.JavaScript.valueToCode(block, 'client_id', Blockly.JavaScript.ORDER_ATOMIC);
    var value_client_secret = Blockly.JavaScript.valueToCode(block, 'client_secret', Blockly.JavaScript.ORDER_ATOMIC);
    var value_port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);
    var value_domain = Blockly.JavaScript.valueToCode(block, 'domain', Blockly.JavaScript.ORDER_ATOMIC);
    var text_redirect_uri = block.getFieldValue('Redirect_Uri');
    var value_license = Blockly.JavaScript.valueToCode(block, 'license', Blockly.JavaScript.ORDER_ATOMIC);
    var value_owner_array = Blockly.JavaScript.valueToCode(block, 'owner_array', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_style = Blockly.JavaScript.statementToCode(block, 'style');
    var statements_settings = Blockly.JavaScript.statementToCode(block, 'settings');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };