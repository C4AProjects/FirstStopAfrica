<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    protected $fillable = ["mflcode","latitude","longitude","method_geocode",
    "source_geocode","date_geocode","province","district","facility","owner",
    "type","division","location","sublocation","nearest_town",
    "plot_no","constituency","status"];
}
