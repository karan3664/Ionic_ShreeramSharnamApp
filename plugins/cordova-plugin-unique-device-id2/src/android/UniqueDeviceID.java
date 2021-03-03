package hu.dpal.phonegap.plugins;

import android.content.Context;
import android.content.SharedPreferences;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.UUID;

public class UniqueDeviceID extends CordovaPlugin {

    private static final String TAG = "UniqueDeviceID";
    private CallbackContext callbackContext;
    private static final int REQUEST_READ_PHONE_STATE = 0;
    private static final String PREF_UNIQUE_ID = "PREF_UNIQUE_ID";

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;

        try {
            if (action.equals("get")) {
                getDeviceId();
            } else {
                this.callbackContext.error("Invalid action");
                return false;
            }
        } catch (Exception e) {
            this.callbackContext.error("Exception occurred: ".concat(e.getMessage()));
            return false;
        }

        return true;
    }

    protected void getDeviceId() {
        try {
            Context context = cordova.getActivity().getApplicationContext();
            SharedPreferences sharedPrefs = context.getSharedPreferences(PREF_UNIQUE_ID, Context.MODE_PRIVATE);
            String uuid = sharedPrefs.getString(PREF_UNIQUE_ID, null);

            if (uuid == null) {
                uuid = UUID.randomUUID().toString();
                SharedPreferences.Editor editor = sharedPrefs.edit();
                editor.putString(PREF_UNIQUE_ID, uuid);
                editor.commit();
            }

            this.callbackContext.success(uuid);
        } catch (Exception e) {
            this.callbackContext.error("Exception occurred: ".concat(e.getMessage()));
        }
    }
}