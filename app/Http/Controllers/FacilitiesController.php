<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Facility;
use Illuminate\Support\Collection;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;

use Senshi\Transformers\FacilityTransformer;

class FacilitiesController extends Controller
{

  function __construct(FacilityTransformer $facilityTransformer)
{
  $this->facilityTransformer = $facilityTransformer;
}
  /**
  * Display a listing of the resource.
  *
  * @return Response
  */
  public function index()
  {
    $facilities = Facility::all()->toArray();

    return Response::json([
          'data'=> $this->facilityTransformer->transformCollection($facilities)
        ],200,array(),JSON_PRETTY_PRINT);
    }
      /**
      * Show the form for creating a new resource.
      *
      * @return Response
      */
      public function create()
      {
        //
      }

      /**
      * Store a newly created resource in storage.
      *
      * @return Response
      */
      public function store()
      {
        //
      }

      /**
      * Display the specified resource.
      *
      * @param  int  $id
      * @return Response
      */
      public function show($id)
      {
        //
      }

      /**
      * Show the form for editing the specified resource.
      *
      * @param  int  $id
      * @return Response
      */
      public function edit($id)
      {
        //
      }

      /**
      * Update the specified resource in storage.
      *
      * @param  int  $id
      * @return Response
      */
      public function update($id)
      {
        //
      }

      /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return Response
      */
      public function destroy($id)
      {
        //
      }
    }
