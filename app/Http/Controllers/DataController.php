<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Response;

use Senshi\Files\FileHandler as FileHandler;

use App\Facility;

class DataController extends Controller
{
  var $filehandler;
  function __construct(){
    $this->filehandler= new FileHandler();
  }
  /**
  * Display a listing of the resource.
  *
  * @return Response
  */
  public function index(Request $request)
  {
    $connection = $request->input('connection');

    $contents = $this->filehandler->scanDir($connection);

    foreach($contents as $file){

      if($file['filename']!=''){
        // dd($file);
         $data=$this->filehandler->readFile($file,$connection);
				// dd($data);



      }
    }

    return Response::json([
      'data'=> $facilities
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
